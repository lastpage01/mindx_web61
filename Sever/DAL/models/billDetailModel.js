import mongoose from "mongoose";
import { BillDetailSchema } from "../schemas/billDetailSchema";

class BillDetailModel {
  constructor() {
    this.model = mongoose.model("BillDetails", BillDetailSchema);
  }

  getAll = () => {
    return this.model.find();
  };
  create = (newBillDetail) => {
    return this.model.create(newBillDetail);
  };
}

export default BillDetailModel;
