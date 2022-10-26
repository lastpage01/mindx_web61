import mongoose from "mongoose";
import { CategorySchema } from "../schemas/categorySchema";

class CategoryModel {
  constructor() {
    this.model = mongoose.model("categories", CategorySchema);
  }
  getAll = () => {
    return this.model.find();
  };
  getById = (id) => {
    return this.model.findById(id);
  };

  findByType = (type) => {
    return this.model.find({ Type: { $regex: `.*${type}.*` } });
  };
}

export default CategoryModel;
