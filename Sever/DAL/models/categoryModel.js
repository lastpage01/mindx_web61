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
  findById = (id) => {
    return this.model.find({ Id: id });
  };
  create = (data) => {
    return this.model.create(data);
  };
  delete = (id) => {
    return this.model.findByIdAndDelete(id);
  };
  update = (id, data) => {
    return this.model.findByIdAndUpdate(id, data);
  };
}

export default CategoryModel;
