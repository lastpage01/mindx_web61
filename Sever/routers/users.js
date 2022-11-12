import express from "express";
import { authenticateToken } from "../common/authentication";
import userModel from "../DAL/models/userModel";

const userRouter = express.Router();
const model = new userModel();

userRouter.get("/", (req, res) => {
  model.getAll().then((data) => {
    res.json({ count: data.length, users: data });
  });
});

userRouter.get("/findByUserName", (req, res) => {
  const { User } = req.query;
  model.findByUsername(User).then((data) => {
    if (data.length > 0) {
      res.status(500).send({ message: "User already exists" });
    } else {
      res.send("success");
    }
  });
});

userRouter.get("/getUser", (req, res) => {
  const { User } = req.query;
  model
    .findByUsername(User)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

userRouter.get("/search", (req, res) => {
  const { User } = req.query;
  model
    .searchUser(User)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
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
      res.json({ existed: true, token: token, admin: data[0].Admin });
    } else {
      res.status(500).send({ message: "Login failed!" });
    }
  });
});

userRouter.post("/register", (req, res) => {
  let user = req.body;
  model
    .create(user)
    .then((data) => {
      res.json({ data });
    })
    .catch((e) => {
      res.send(e);
    });
});

userRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  model
    .delete(id)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.send(e);
    });
});

userRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const user = req.body;
  model
    .update(id,user)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.send(e);
    });
});

export default userRouter;
