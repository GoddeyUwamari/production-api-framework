import { Router } from 'express';
import { taskController } from './task.controller';
import { validate } from '../../../middlewares/validation.middleware';
import {
  createTaskValidator,
  updateTaskValidator,
  updateTaskStatusValidator,
  assignTaskValidator,
  getTaskValidator,
  deleteTaskValidator,
  listTasksValidator,
} from './task.validator';

/**
 * Task Routes
 *
 * RESTful API endpoints for task management
 */

const router = Router();

// Get overdue tasks (must be before /:id route)
router.get('/overdue', taskController.getOverdueTasks.bind(taskController));

// Get all tasks with pagination and filters
router.get('/', validate(listTasksValidator), taskController.getAllTasks.bind(taskController));

// Get task by ID
router.get('/:id', validate(getTaskValidator), taskController.getTaskById.bind(taskController));

// Create new task
router.post('/', validate(createTaskValidator), taskController.createTask.bind(taskController));

// Update task
router.put('/:id', validate(updateTaskValidator), taskController.updateTask.bind(taskController));

// Update task status
router.patch(
  '/:id/status',
  validate(updateTaskStatusValidator),
  taskController.updateTaskStatus.bind(taskController)
);

// Assign task to user
router.patch(
  '/:id/assign',
  validate(assignTaskValidator),
  taskController.assignTask.bind(taskController)
);

// Delete task (soft delete)
router.delete(
  '/:id',
  validate(deleteTaskValidator),
  taskController.deleteTask.bind(taskController)
);

export default router;
