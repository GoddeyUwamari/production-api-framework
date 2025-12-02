import { Router } from 'express';
import { healthCheck, readinessCheck } from '../controllers/healthController';

const router = Router();

// Health check endpoint for monitoring
router.get('/health', healthCheck);

// Readiness check endpoint for Kubernetes
router.get('/ready', readinessCheck);

export default router;
