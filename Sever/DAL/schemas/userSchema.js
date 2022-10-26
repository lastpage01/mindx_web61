import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  User: String,
  Password: String,
  Admin: Boolean,
});
