import { Pool } from 'pg';
import { logger } from '../utils/logger';

export const pool = new Pool({
  host: process.env.DB_HOST || 'postgres',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'hotelshift',
  user: process.env.DB_USER || 'hotelshift_user',
  password: process.env.DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

export async function connectDB() {
  try {
    const client = await pool.connect();
    await client.query('SELECT NOW()');
    client.release();
    logger.info('✅ PostgreSQL connected successfully');
    await runMigrations();
  } catch (err) {
    logger.error('❌ PostgreSQL connection failed:', err);
    throw err;
  }
}

async function runMigrations() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query(`
      CREATE TABLE IF NOT EXISTS migration_history (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        executed_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);
    // Run each migration in order
    const migrations = await import('./migrations');
    for (const [name, sql] of Object.entries(migrations.default)) {
      const { rows } = await client.query('SELECT id FROM migration_history WHERE name = $1', [name]);
      if (rows.length === 0) {
        await client.query(sql as string);
        await client.query('INSERT INTO migration_history (name) VALUES ($1)', [name]);
        logger.info(`✅ Migration executed: ${name}`);
      }
    }
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}
