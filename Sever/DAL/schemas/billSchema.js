import mongoose from "mongoose";

export const BillSchema = new mongoose.Schema({
  Id: Intl,
  FirstName: String,
  LastName: String,
  Phone: Intl,
  Email: String,
  Province: String,
  District: String,
  Ward: String,
  DetailedAddress: String,
  Total: Intl,
  User: String,
  Dated: Date,
});
