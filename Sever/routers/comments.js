import express from "express";

import CommentModel from "../DAL/models/commentModel";

const commentRouter = express.Router();
const model = new CommentModel();

commentRouter.get("/", (req, res) => {
  model
    .getAll()
    .then((data) => {
      res.json({ count: data.length, products: data });
    })
    .catch((err) => {
      throw err;
    });
});

commentRouter.post("/", (req, res) => {
  const newComment = req.body;
  model
    .create(newComment)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

export default commentRouter