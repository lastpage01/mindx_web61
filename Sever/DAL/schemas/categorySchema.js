import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  Id: String,
  Type: String,
});
