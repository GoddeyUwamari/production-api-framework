import { Router } from 'express';
import { userController } from './user.controller';
import { validate } from '../../../middlewares/validation.middleware';
import {
  createUserValidator,
  updateUserValidator,
  getUserValidator,
  deleteUserValidator,
  listUsersValidator,
  changePasswordValidator,
} from './user.validator';

/**
 * User Routes
 *
 * RESTful API endpoints for user management
 */

const router = Router();

// Get all users with pagination
router.get('/', validate(listUsersValidator), userController.getAllUsers.bind(userController));

// Get user by ID
router.get('/:id', validate(getUserValidator), userController.getUserById.bind(userController));

// Get user's tasks
router.get(
  '/:id/tasks',
  validate(getUserValidator),
  userController.getUserTasks.bind(userController)
);

// Create new user
router.post('/', validate(createUserValidator), userController.createUser.bind(userController));

// Update user
router.put('/:id', validate(updateUserValidator), userController.updateUser.bind(userController));

// Change password
router.post(
  '/:id/change-password',
  validate(changePasswordValidator),
  userController.changePassword.bind(userController)
);

// Delete user (soft delete)
router.delete(
  '/:id',
  validate(deleteUserValidator),
  userController.deleteUser.bind(userController)
);

export default router;
