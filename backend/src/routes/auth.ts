import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../db/connection';
import { logger } from '../utils/logger';

export const authRouter = Router();

// POST /api/auth/login
authRouter.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Username and password required' });
    const { rows } = await pool.query(
      'SELECT id, username, email, full_name, role, password_hash, is_active FROM employees WHERE username = $1 OR email = $1',
      [username.toLowerCase().trim()]
    );
    if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    const emp = rows[0];
    if (!emp.is_active) return res.status(403).json({ error: 'Account deactivated. Contact your manager.' });
    const valid = await bcrypt.compare(password, emp.password_hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign(
      { id: emp.id, role: emp.role, email: emp.email, full_name: emp.full_name },
      process.env.JWT_SECRET!,
      { expiresIn: '12h' }
    );
    logger.info(`Login: ${emp.username} (${emp.role})`);
    return res.json({
      token,
      employee: { id: emp.id, username: emp.username, email: emp.email, full_name: emp.full_name, role: emp.role },
    });
  } catch (err) {
    logger.error('Login error:', err);
    return res.status(500).json({ error: 'Login failed' });
  }
});

// GET /api/auth/me
authRouter.get('/me', async (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as any;
    const { rows } = await pool.query(
      'SELECT id, username, email, full_name, role, hourly_rate FROM employees WHERE id = $1',
      [payload.id]
    );
    if (!rows[0]) return res.status(404).json({ error: 'Employee not found' });
    return res.json(rows[0]);
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
});
