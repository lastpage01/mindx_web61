import express from "express";

import CategoryModel from "../DAL/models/categoryModel";

const categoryRouter = express.Router();
const model = new CategoryModel();

categoryRouter.get("/", (req, res) => {
  model
    .getAll()
    .then((data) => {
      res.json({ count: data.length, categories: data });
    })
    .catch((err) => {
      throw err;
    });
});

categoryRouter.get("/findById/:id", (req, res) => {
  model
    .getById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

categoryRouter.get("/findByType", (req, res) => {
  const { type } = req.query;
  model
    .findByType(type)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

export default categoryRouter;
