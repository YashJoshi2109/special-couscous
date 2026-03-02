import { Router } from 'express';
import { requireAdmin } from '../middleware/auth';

export const adminRouter = Router();
adminRouter.use(requireAdmin);

// GET /api/admin/dashboard
adminRouter.get('/dashboard', async (req, res) => {
  // TODO: Implement dashboard stats
  res.json({ employees: 0, activeSessions: 0, totalEarnings: 0 });
});

// GET /api/admin/employees
adminRouter.get('/employees', async (req, res) => {
  // TODO: Implement employee listing
  res.json([]);
});

// POST /api/admin/employees
adminRouter.post('/employees', async (req, res) => {
  // TODO: Implement employee creation
  res.status(201).json({ message: 'Employee created' });
});
