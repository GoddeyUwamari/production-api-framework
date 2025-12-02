import { Router } from 'express';
import { getApiVersion } from '../controllers/apiController';

const router = Router();

// API v1 routes
router.get('/', getApiVersion);

// Future routes will be added here in subsequent phases
// Example:
// router.use('/users', userRoutes);
// router.use('/auth', authRoutes);
// router.use('/products', productRoutes);

export default router;
