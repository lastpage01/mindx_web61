import mongoose from "mongoose";
import { CommentSchema } from "../schemas/commentSchema";

class CommentModel {
  constructor() {
    this.model = mongoose.model("comments", CommentSchema);
  }
  getAll = () => {
    return this.model.find();
  };
  create = (newComment) => {
    return this.model.create(newComment);
  };
}

export default CommentModel;
