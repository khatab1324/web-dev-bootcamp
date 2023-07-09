// =================require laibary============================
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate"); //this for layout to put all the html in it like cjs if you remmeber
const app = express();
// =======================require file ==========================
const catchAsync = require("./utils/catchAsync");
const ExpressError = require("./utils/ExpressError");
const methodOverride = require("method-override");
const campgroundsRouter = require("./router/campgrounds");
const reviewsRouter = require("./router/reviews");
mongoose
  .connect("mongodb://127.0.0.1:27017/yelp-camp", {
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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate); // this for ejsMate if you delete it the file can't render in layout like body open layout folder and boilderplate to understand or open index.ejs
//...that mean this engine to load body inside layout

//========================= middlewere=========================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//====================use router====================
app.use("/", campgroundsRouter);
app.use(reviewsRouter);
// ================================== methods ==============================
app.get("/", (req, res) => {
  res.render("home");
});

app.all("*", (req, res, next) => {
  //this will work if every thing else not working

  next(new ExpressError("Page not found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong!";
  res.status(statusCode).render("error", { err });
});

app.listen(2023, () => {
  console.log("Serving on port 2023");
});
