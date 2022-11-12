import mongoose from "mongoose";

export const CommentSchema = new mongoose.Schema({
  User: String,
  Name: String,
  Email: String,
  Phone: Intl,
  Message: String,
});
