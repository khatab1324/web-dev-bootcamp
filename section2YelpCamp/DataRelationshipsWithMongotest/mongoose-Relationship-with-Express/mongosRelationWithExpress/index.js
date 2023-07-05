const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const categories = ["fruit", "vegetable", "dairy"];
const Product = require("./models/product");
const Farm = require("./models/farm");
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });
// ================ejs==========================
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//================use===========================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//===============get============================

// ======================farm========================
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/index", { farms });
});
app.post("/farms", async (req, res) => {
  const newFarm = new Farm(req.body);
  await newFarm.save();
  console.log(newFarm);
  res.redirect("/farms");
});
app.get("/farms/new", async (req, res) => {
  res.render("farms/new");
});
// NOTE:avoid the error from order
//when we difine /farms/:id it should be after  /farms/new to not get error becuase the farms/:id will not hit farms/new and express think new it is id
app.get("/farms/:id", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id).populate("products"); //to show and call the product from db populate to show the product
  //if you not familiar with populate you can search or go to file name is:
  res.render("farms/show", { farm });
});

// now we need to show the product in farms
app.get("/farms/:id/products/new", (req, res) => {
  const { id } = req.params;
  res.render("products/newProduct", { categories, id });
});
app.post("/farms/:id/products", async (req, res) => {
  // now i want to add products to Farm
  const { id } = req.params;
  //now we call the farme that have this  id and add products to it
  const farm = await Farm.findById(id);
  const { name, price, category } = req.body;
  const newProduct = new Product({ name, price, category });
  // if you remember if not just open models and farm.js you will see products is array
  // we need to push the newProduct to it
  farm.products.push(newProduct);
  //also products.js have farm we need evaluate it with farm
  Product.farm = farm;
  farm.save();
  newProduct.save();
  res.redirect(`/farms/${id}`);
});

app.delete("/farms/:id", async (req, res) => {
  const farm = await Farm.findByIdAndDelete(req.params.id);

  res.redirect("/farms");
});

//

// ==========product===========
app.get("/", (req, res) => {
  console.log("req to home");
  res.send(
    `you are in home page
     <a href="/products"><button>products page</button></a>`
  );
});
app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("products/showProducts", { products });
  } else {
    const products = await Product.find({});
    res.render("products/showProducts", { products, categories }); //this for ejs
  }
});
app.get("/products/new", (req, res) => {
  res.render("products/newProduct");
});
app.post("/products", async (req, res) => {
  console.log(req.body);
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products`);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id); //with findById just pass the id
  res.render("products/theProduct", { product, id });
});
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/editProduct", { product, categories });
});
//put come from method-override
app.put("/products/:id", async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const editProduct = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  await editProduct.save();
  res.redirect(`/products/${editProduct.id}`);
});
// now aplay the delete override in theProduct.ejs
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.listen(2000, () => {
  console.log("server satrt on port 2000");
});
