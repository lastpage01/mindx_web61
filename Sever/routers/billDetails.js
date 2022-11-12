import express from "express";
import BillDetailModel from "../DAL/models/billDetailModel";

const billDetailRouter = express.Router();
const model = new BillDetailModel();

billDetailRouter.get("/", (req, res) => {
  model
    .getAll()
    .then((data) => {
      res.json({ count: data.length, billDetails: data });
    })
    .catch((err) => {
      throw err;
    });
});

billDetailRouter.post("/", (req, res) => {
  const newBillDetail = req.body;
  model
    .create(newBillDetail)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

export default billDetailRouter;
