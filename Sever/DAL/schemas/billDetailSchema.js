import mongoose from "mongoose";

export const BillDetailSchema = new mongoose.Schema({
    IdBill: Intl,
      IdProduct: mongoose.Schema.Types.ObjectId,
    Price: Intl,
    Promotion: Intl,
    Quantity: Intl,
    Total: Intl,
});
