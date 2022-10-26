import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  Name: String,
  Id_Category: String,
  Price: Intl,
  Promotion: Intl,
  Favourite: Intl,
  Img: String,
});
