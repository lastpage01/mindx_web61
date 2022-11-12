import mongoose from "mongoose";
import { BillSchema } from "../schemas/billSchema";

class BillModel {
  constructor() {
    this.model = mongoose.model("bills", BillSchema);
  }

  getAll = () => {
    return this.model.find().sort({Id : 1});;
  };
  getById = (id) => {
    return this.model.find({ Id: id });
  };

  create = (newBill) => {
    return this.model.create(newBill);
  };
}

export default BillModel;
