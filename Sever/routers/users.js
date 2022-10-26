import express from "express";
import { authenticateToken } from "../common/authentication";
import userModel from "../DAL/models/userModel";

const userRouter = express.Router();
const model = new userModel();

userRouter.get("/", authenticateToken, (req, res) => {
  model.getAll().then((data) => {
    res.json({ count: data.length, users: data });
  });
});

userRouter.post("/login", (req, res) => {
  let user = req.body;
  let uname = user.User;
  let pass = user.Password;
  model.findByUsernameAndPassword(uname, pass).then((data) => {
    if (data.length > 0) {
      //generate jwt token
      let token = model.generateAccessToken(uname); // "day la jwt token"; //cai nay se cai dat sau
      res.json({ existed: true, token: token });
    } else {
      res.status(500).send({ message: "Login failed!" });
    }
  });
});

export default userRouter;
