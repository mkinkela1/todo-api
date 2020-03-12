import { Router } from 'express';
const router = Router();

import { createTask, getTasks, updateTask, deleteTask } from './../controllers/TaskController';
import { validateCreateTask, validateGetTasks, validateUpdateTask, validateDeleteTask } from '../validators/TaskValidator';

router.post('/', validateCreateTask, createTask);
router.get('/', validateGetTasks, getTasks);
router.put('/:taskId', validateUpdateTask, updateTask);
router.delete('/:taskId', validateDeleteTask, deleteTask);

module.exports = router;