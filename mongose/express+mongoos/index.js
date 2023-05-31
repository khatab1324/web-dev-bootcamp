const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Product = require("./models/product");
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
app.get("/", (req, res) => {
  console.log("req to home");
  res.send(
    `you are in home page
     <a href="/products"><button>products page</button></a>`
  );
});
app.get("/products", async (req, res) => {
  const products = await Product.find({});

  res.render("products/showProducts", { products });
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
  res.render("products/editProduct", { product });
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

app.listen(2000, () => {
  console.log("server satrt on port 2000");
});
