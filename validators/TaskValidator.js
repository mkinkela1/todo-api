import { check } from 'express-validator';

exports.validateCreateTask = () => {
  return [
    check('name').exists().isString(),
    check('description').exists().isString()
  ];
};


export function validateGetTasks() {
  return [];
};

export function validateUpdateTask() {
  return [
    check('taskId').exists().isMongoId()
  ];
} 

export function validateDeleteTask() {
  return [
    check('id').exists().isMongoId()
  ];
} 