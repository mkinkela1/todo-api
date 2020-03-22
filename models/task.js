import { Schema, model } from 'mongoose';

const taskSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model('Task', taskSchema);