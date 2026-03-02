import { Router } from 'express';
import { requireAuth, AuthRequest } from '../middleware/auth';
import { calculatePaystub } from '../services/payCalculator';

export const paystubRouter = Router();
paystubRouter.use(requireAuth);

// GET /api/paystub?from=2024-01-01&to=2024-01-31
paystubRouter.get('/', async (req: AuthRequest, res) => {
  try {
    const from = req.query.from ? new Date(req.query.from as string) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const to = req.query.to ? new Date(req.query.to as string) : new Date();
    
    const paystub = await calculatePaystub(req.employee!.id, from, to);
    return res.json(paystub);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to calculate paystub' });
  }
});
