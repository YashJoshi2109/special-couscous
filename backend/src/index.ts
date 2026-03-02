import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { authRouter } from './routes/auth';
import { shiftsRouter } from './routes/shifts';
import { paystubRouter } from './routes/paystub';
import { vouchersRouter } from './routes/vouchers';
import { adminRouter } from './routes/admin';
import { logger } from './utils/logger';
import { connectDB } from './db/connection';

const app = express();
const PORT = process.env.PORT || 4000;

// ── SECURITY MIDDLEWARE ──
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "blob:"],
      connectSrc: ["'self'"],
      scriptSrc: ["'self'"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// ── RATE LIMITING ──
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' },
});
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // strict on login
  message: { error: 'Too many login attempts. Please wait 15 minutes.' },
});

app.use(limiter);
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(morgan('combined', { stream: { write: (msg) => logger.info(msg.trim()) } }));

// ── HEALTH CHECK (no auth required) ──
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), version: process.env.npm_package_version });
});

// ── ROUTES ──
app.use('/api/auth', authLimiter, authRouter);
app.use('/api/shifts', shiftsRouter);
app.use('/api/paystub', paystubRouter);
app.use('/api/vouchers', vouchersRouter);
app.use('/api/admin', adminRouter);

// ── 404 HANDLER ──
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── GLOBAL ERROR HANDLER ──
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  logger.error(`Unhandled error: ${err.message}`, { stack: err.stack });
  res.status(500).json({ error: 'Internal server error' });
});

// ── START ──
async function start() {
  await connectDB();
  app.listen(PORT, () => {
    logger.info(`🚀 HotelShift Pro API running on port ${PORT}`);
  });
}
start().catch((err) => {
  logger.error('Failed to start server:', err);
  process.exit(1);
});
