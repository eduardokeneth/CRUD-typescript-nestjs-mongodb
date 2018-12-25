import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  tag: String,
  title: String,
  price: Number,
});
