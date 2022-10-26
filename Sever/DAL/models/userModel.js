import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

import { UserSchema } from "../schemas/userSchema";

class UserModel {
  constructor() {
    this.model = mongoose.model("users", UserSchema);
  }
  getAll() {
    return this.model.find().exec();
  }
  findByUsernameAndPassword(uname, pass) {
    var query = this.model.find({ User: uname, Password: pass }).limit(1);
    return query.exec();
  }

  generateAccessToken = (uname) => {
    return jwt.sign({ User: uname }, "bWluZHgud2ViNjE=", {
      expiresIn: "1h",
    });
  };
}

export default UserModel;
