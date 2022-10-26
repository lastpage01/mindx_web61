import mongoose from "mongoose";

import { ProductSchema } from "../schemas/productSchema";

class ProductModel {
  constructor() {
    this.model = mongoose.model("products", ProductSchema);
  }
  getAll = () => {
    return this.model.find().sort({Favourite : -1});
  };
  getById = (id) => {
    return this.model.findById(id);
  };

  findByName = (name) => {
    return this.model.find({ Name: { $regex: `.*${name}.*` } });
  };
  findByIdCategory= (Id_Category) => {
    return this.model.find({ Id_Category: `${Id_Category}`});
  };

  create = (newProduct) => {
    return this.model.create(newProduct);
  };

  update = (id, product) => {
    return this.model.findByIdAndUpdate(id, {
      $set: {
        Name: product.Name,
        Id_Category: product.Id_Category,
        Price: product.Price,
        Promotion: product.Promotion,
        Favourite: product.Favourite,
        Img: product.Img,
      },
    });
  };

  delete = (id) => {
    return this.model.findByIdAndDelete(id);
  };

  deleteAll = () => {
    return this.model.deleteMany();
  };
}

export default ProductModel;
