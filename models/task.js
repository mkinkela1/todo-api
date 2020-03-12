import { Schema, model } from 'mongoose';

const taskSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  description: String,
  createdAt: String
});

export default model('Task', taskSchema);