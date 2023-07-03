const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const AppError = require("./AppError");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand2", {
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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];

function wrapAsync(fn) {
  return function (req, res, next) {
    //this fuction excute the under function
    fn(req, res, next).catch((e) => next(e)); //if there error catch will work
  };
} //this fucntoin rether then write every time try and catch //it handle the error

app.get(
  "/products",
  wrapAsync(async (req, res, next) => {
    //here i use wrapAsunc function that is above ^
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render("products/index", { products, category });
    } else {
      const products = await Product.find({});
      res.render("products/index", { products, category: "All" });
    }
  })
);

app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

app.post(
  "/products",
  wrapAsync(async (req, res, next) => {
    //here i use wrapAsync function that
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  })
);

app.get("/products/:id", async (req, res, next) => {
  //we add next because xpress will catch and process them
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return next(new AppError("Product Not Found", 404)); //i put next rether then throw the resone down
  } //For errors returned from asynchronous functions invoked by route handlers and middleware,
  // .... you must pass them to the next() function, where Express will catch and process them
  res.render("products/show", { product }); //if there is error and if you don't pass a return you will get error in the terminal because there is no name or product
});

app.get("/products/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product Not Found", 404);
    }
    res.render("products/edit", { product, categories });
  } catch (error) {
    next(error);
  } //you don't need return next because you use try and catch
});

app.put(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.redirect(`/products/${product._id}`);
  })
);

app.delete(
  "/products/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
  })
);

const handleValidationErr = (err) => {
  console.dir(err);
  //In a real app, we would do a lot more here...
  return new AppError(`Validation Failed...${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  //We can single out particular types of Mongoose Errors:
  if (err.name === "ValidationError") err = handleValidationErr(err);
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000!");
});
