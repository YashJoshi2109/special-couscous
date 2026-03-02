import { Router } from 'express';
import { pool } from '../db/connection';
import { requireAuth, AuthRequest } from '../middleware/auth';
import { logger } from '../utils/logger';

export const shiftsRouter = Router();
shiftsRouter.use(requireAuth);

// POST /api/shifts/clockin
shiftsRouter.post('/clockin', async (req: AuthRequest, res) => {
  try {
    const { shift_type, role_type } = req.body;
    const empId = req.employee!.id;
    // Check not already clocked in
    const { rows: active } = await pool.query(
      'SELECT id FROM shift_sessions WHERE employee_id = $1 AND clock_out IS NULL',
      [empId]
    );
    if (active.length > 0 && shift_type !== 'shuttle') {
      return res.status(409).json({ error: 'Already clocked in. Please clock out first.' });
    }
    const { rows } = await pool.query(
      `INSERT INTO shift_sessions (employee_id, shift_type, role_type) VALUES ($1, $2, $3) RETURNING *`,
      [empId, shift_type, role_type]
    );
    logger.info(`Clock in: ${empId} ${shift_type}`);
    return res.status(201).json(rows[0]);
  } catch (err) {
    logger.error('Clock in error:', err);
    return res.status(500).json({ error: 'Failed to clock in' });
  }
});

// PATCH /api/shifts/:id/clockout
shiftsRouter.patch('/:id/clockout', async (req: AuthRequest, res) => {
  try {
    const { tips } = req.body;
    const { id } = req.params;
    const { rows } = await pool.query(
      `UPDATE shift_sessions SET clock_out = NOW(), tips = $1 WHERE id = $2 AND employee_id = $3 AND clock_out IS NULL RETURNING *`,
      [tips || 0, id, req.employee!.id]
    );
    if (!rows[0]) return res.status(404).json({ error: 'Active session not found' });
    // Credit tip bonus event if tips > 0
    if (Number(tips) > 0) {
      await pool.query(
        `INSERT INTO bonus_events (employee_id, type, amount, reference_id, description) VALUES ($1, 'tip', $2, $3, 'Self-reported tip')`,
        [req.employee!.id, tips, id]
      );
    }
    return res.json(rows[0]);
  } catch (err) {
    logger.error('Clock out error:', err);
    return res.status(500).json({ error: 'Failed to clock out' });
  }
});

// GET /api/shifts/my — get own sessions
shiftsRouter.get('/my', async (req: AuthRequest, res) => {
  try {
    const { from, to } = req.query;
    const { rows } = await pool.query(
      `SELECT ss.*, 
        EXTRACT(EPOCH FROM (COALESCE(ss.clock_out, NOW()) - ss.clock_in)) / 3600 AS hours_worked
       FROM shift_sessions ss
       WHERE ss.employee_id = $1 
         AND ss.clock_in >= COALESCE($2::timestamptz, NOW() - INTERVAL '30 days')
         AND ss.clock_in <= COALESCE($3::timestamptz, NOW() + INTERVAL '1 day')
       ORDER BY ss.clock_in DESC`,
      [req.employee!.id, from || null, to || null]
    );
    return res.json(rows);
  } catch (err) {
    logger.error('Get sessions error:', err);
    return res.status(500).json({ error: 'Failed to fetch sessions' });
  }
});

// GET /api/shifts/active — current active session
shiftsRouter.get('/active', async (req: AuthRequest, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT *, EXTRACT(EPOCH FROM (NOW() - clock_in)) AS elapsed_seconds
       FROM shift_sessions WHERE employee_id = $1 AND clock_out IS NULL ORDER BY clock_in DESC`,
      [req.employee!.id]
    );
    return res.json(rows);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch active sessions' });
  }
});
