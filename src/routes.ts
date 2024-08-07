import { Router } from 'express';
import authRoutes from '@/auth/auth.route';
import userRoutes from '@/user/user.route';

const router = Router();
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export default router;
