import mongoose from "mongoose";
import jwt from "jsonwebtoken";

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
  findByUsername(uname) {
    var query = this.model.find({ User: uname }).limit(1);
    return query.exec();
  }
  searchUser = (uname) => {
    return this.model.find({ User: { $regex: `.*${uname}.*` } });
  };
  generateAccessToken = (uname) => {
    return jwt.sign({ User: uname }, "bWluZHgud2ViNjE=", {
      expiresIn: "1h",
    });
  };

  create = (newUser) => {
    return this.model.create(newUser);
  };
  delete = (id) => {
    return this.model.findByIdAndDelete(id);
  };
  update = (id, user) => {
    return this.model.findByIdAndUpdate(id, {
      $set: {
        Password: user.Password,
        FullName: user.FullName,
        Phone: user.Phone,
        Admin: user.Admin,
      },
    });
  };
}

export default UserModel;
