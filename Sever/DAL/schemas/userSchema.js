import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  User: String,
  Password: String,
  FullName: String,
  Phone: String,
  Admin: Boolean,
});
