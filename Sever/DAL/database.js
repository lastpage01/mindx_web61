import mongoose from "mongoose";

const url =
  "mongodb+srv://phucquy:fwU89cavVmHOklBr@clothing-stores-db.t9pcelr.mongodb.net/Clothing_Stores?retryWrites=true&w=majority";
class database {
  constructor() {}
  connect = async () => {
    await mongoose.connect(url);
  };
}

export default new database();
