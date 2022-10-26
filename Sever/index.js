import express from "express";
import cors from "cors";

import db from "./DAL/database";
import productRouter from "./routers/products";
import categoryRouter from "./routers/categories";
import userRouter from "./routers/users";

const app = express();
const post = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Sever Clothing Store fwU89cavVmHOklBr");
});

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/users", userRouter);

app.listen(post, (req, res) => {
  console.log(`App listening on port ${post}`);
  db.connect()
    .then(() => {
      console.log("database is connected !");
    })
    .catch((err) => {
      throw err;
    });
});
