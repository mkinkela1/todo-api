import { Router } from 'express';
const router = Router();

const TaskController = require('./../controllers/TaskController');
const Validator = require('./../validators/TaskValidator');

router.post('/', Validator.validateCreateTask(), TaskController.createTask);
router.get('/', Validator.validateGetTasks(), TaskController.getTasks);
router.put('/:taskId', Validator.validateUpdateTask(), TaskController.updateTask);
router.delete('/:taskId', Validator.validateDeleteTask(), TaskController.deleteTask);

module.exports = router;