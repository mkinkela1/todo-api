import { check } from 'express-validator';

export function validateCreateTask() {
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
    check('taskId').exists().isMongoId()
  ];
} 