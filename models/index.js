import mongoose from 'mongoose';
import { studentModel } from '../models/studentModel.js';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.student = studentModel(mongoose);

export { db };
