import mongoose from 'mongoose';
import { validationResult } from 'express-validator';

import Task from '../models/task';

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
exports.createTask = (req, res, next) => {

  try {

    validationResult(req).throw();

    const { name, description } = req.body;

    const task = new Task({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      description: description
    });

    task
      .save()
      .then(result => {
        res
          .status(201)
          .json(result);
      })
      .catch(error => {       
        res
          .status(500)
          .json(error);
      });
  
  } catch(error) {
    res
      .status(422)
      .json(error);
  }
};

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
exports.getTasks =(req, res, next) => {

  try {

    validationResult(req).throw();

    Task
      .find()
      .exec()
      .then(docs => {
        if(docs.length > 0)
          res
            .status(200)
            .json(docs);
        else 
          res
            .status(404)
            .json();
      })
      .catch(error => {
        res
          .status(500)
          .json(error);
      });

  } catch(error) {
    res
      .status(422)
      .json(error);
  }
};

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
exports.getTaskById = (req, res, next) => {

  try {

    validationResult(req).throw();

  } catch(error) {
    res
      .status(422)
      .json(error);
  }
} 

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
exports.updateTask = (req, res, next) => {
  
  try {

    validationResult(req).throw();

    const { id } = req.params;
    const { name, description } = req.body;
    let updateOps = {}

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
        res
          .status(200)
          .json(result);
      })
      .catch(error => {
        res
          .status(500)
          .json(error);
      });

  } catch(error) {
    res
      .status(422)
      .json(error);
  }

};
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
exports.deleteTask = (req,res, next) => {

  try {
      
    validationResult(req).throw();

    const { id } = req.params;

    console.log(id);
    

    Task
      .deleteOne({ _id: id })
      .exec()
      .then(result => {
        res
          .status(204);
      })
      .catch(error => {
        res
          .status(500)
          .json(error);
      });

  } catch(error) {
    res
      .status(422)
      .json(error);
  }
}