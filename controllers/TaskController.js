import { Types } from 'mongoose';
import Task from '../models/task';

export function createTask(req, res, next) {

  const date = new Date();
  const time = date.getTime();

  const task = new Task({
    _id: new Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    createdAt: time
  });

  task.save()
    .then(result => {
      res.status(201).json({
        message: 'Zadatak je stvoren'
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}
export function getTasks(req, res, next) {

  Task
    .find()
    .exec()
    .then(docs => {
      if(docs.length > 0)
        res.status(200).json({
          docs: docs
        });
      else 
        res.status(404).json({
          message: 'Zadaci ne postoje'
        });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}

export function updateTask(req, res, next) {
  
  const id = req.params.taskId;

  const name = req.body.name;
  const description = req.body.description;

  const updateOps = {}

  if(name)
    updateOps['name'] = name;
  if(description)
    updateOps['description'] = description;

  Task
    .update(
      { _id: id },
      { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });

}

export function deleteTask(req,res, next) {

  const id = req.params.taskId;

  Task
    .remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Zadatak je izbrisan'
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}