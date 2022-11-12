import express from "express";

import ProductModel from "../DAL/models/productModel";

const productRouter = express.Router();
const model = new ProductModel();

productRouter.get("/", (req, res) => {
  model
    .getAll()
    .then((data) => {
      res.json({ count: data.length, products: data });
    })
    .catch((err) => {
      throw err;
    });
});


productRouter.get("/findById/:id", (req, res) => {
  model
    .getById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

productRouter.get("/findByName", (req, res) => {
  const { name } = req.query;
  model
    .findByName(name)
    .then((data) => {
      res.json({ count: data.length, products: data });
    })
    .catch((err) => {
      throw err;
    });
});

productRouter.get("/findByIdCategory", (req, res) => {
  const { Id_Category } = req.query;
  model
    .findByIdCategory(Id_Category)
    .then((data) => {
      res.json({ count: data.length, products: data });
    })
    .catch((err) => {
      throw err;
    });
});

productRouter.post("/", (req, res) => {
  const newProduct = req.body;
  model
    .create(newProduct)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

productRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const product = req.body;
  // console.log(req.body);
  const p = await model.model.findById(id);

  // console.log("p::", p);
  // console.log("body::", req.body);
  if (!p) {
    return res.status(400).json({ message: "Product not found" });
  }
  try {
    await model.model.bulkSave([Object.assign(p, product)]);
    return res.json(p);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500); //
  }
});

productRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  model
    .delete(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

productRouter.delete("/deleteAll", (req, res) => {
  model
    .deleteAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

export default productRouter;
