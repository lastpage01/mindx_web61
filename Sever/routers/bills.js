import express from "express";

import BillModel from "../DAL/models/billModel";

const billRouter = express.Router();
const model = new BillModel();

billRouter.get("/", (req, res) => {
  model
    .getAll()
    .then((data) => {
      res.json({ count: data.length, bills: data });
    })
    .catch((err) => {
      throw err;
    });
});

billRouter.get("/findById", (req, res) => {
  const { Id } = req.query;
  model
    .findByType(Id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

billRouter.post("/", (req, res) => {
  const newBill = req.body;
  model
    .create(newBill)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

export default billRouter;
