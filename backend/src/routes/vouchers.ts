import { Router } from 'express';
import { requireAuth } from '../middleware/auth';

export const vouchersRouter = Router();
vouchersRouter.use(requireAuth);

// GET /api/vouchers/my
vouchersRouter.get('/my', async (req, res) => {
  // TODO: Implement voucher listing
  res.json([]);
});

// POST /api/vouchers
vouchersRouter.post('/', async (req, res) => {
  // TODO: Implement voucher submission
  res.status(201).json({ message: 'Voucher submitted' });
});

// POST /api/vouchers/sharing
vouchersRouter.post('/sharing', async (req, res) => {
  // TODO: Implement voucher sharing
  res.json({ message: 'Sharing updated' });
});
