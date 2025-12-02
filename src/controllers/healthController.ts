import { Request, Response } from 'express';
import { config } from '../config/environment';

interface HealthCheckResponse {
  success: boolean;
  message: string;
  timestamp: string;
  uptime: number;
  environment: string;
  version: string;
}

interface ReadinessCheckResponse extends HealthCheckResponse {
  services: {
    database: string;
    redis: string;
  };
}

export const healthCheck = (_req: Request, res: Response): void => {
  const healthResponse: HealthCheckResponse = {
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: config.node_env,
    version: config.api_version,
  };

  res.status(200).json(healthResponse);
};

export const readinessCheck = (_req: Request, res: Response): void => {
  // In Phase 2, we'll add actual database and Redis health checks
  const readinessResponse: ReadinessCheckResponse = {
    success: true,
    message: 'API is ready',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: config.node_env,
    version: config.api_version,
    services: {
      database: 'not_configured', // Will be 'healthy' in Phase 2
      redis: 'not_configured', // Will be 'healthy' in Phase 2
    },
  };

  res.status(200).json(readinessResponse);
};
