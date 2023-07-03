const express = require("express");
const path = require("path");
const catchAsync = require("./utils/catchAsync");
const ExpressError = require("./utils/ExpressError");
const methodOverride = require("method-override");
const Campground = require("./models/campground");
const mongoose = require("mongoose");
const { campgroundSchema } = require("./schemas");
const Joi = require("joi");
const ejsMate = require("ejs-mate"); //this for layout to put all the html in it like cjs if you remmeber
const { error } = require("console");
const app = express();
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
const validation = (req, res, next) => {
  // now we will use joi
  const campgroundSchema = Joi.object({
    //this not like mongoose schema no , its validate the valuse before send them to mongoose ,its like validation

    campground: Joi.object({
      //campground its array ,that have all the valuse of input like price tittle ...
      title: Joi.string().required(),
      price: Joi.number().required().min(0),
      image: Joi.string().required(),
      location: Joi.string().required(),
      description: Joi.string().required(),
    }).required(),
  });
  //now we should pass our data throw schema
  const { error } = campgroundSchema.validate(req.body);
  console.log(error);
  if (error) {
    const msg = error.details.map((element) => element.message).join(","); //we map the details because it is obj
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// ================================== methods ==============================
app.get("/", (req, res) => {
  res.render("home");
});
app.get(
  "/campgrounds",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
  })
);
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});
//rether then using try and catch we call fucntion that catch the error
app.post(
  "/campgrounds",
  validation,
  catchAsync(async (req, res, next) => {
    console.log(req.body);
    // if (!req.body.campground)
    //   //this tell if the data emtdy like title price imge all of this emtdy throw error
    //   throw new ExpressError("Invalid Campground Data", 400);

    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

app.get(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render("campgrounds/show", { campground });
  })
);

app.get(
  "/campgrounds/:id/edit",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render("campgrounds/edit", { campground });
  })
);

app.put(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    });
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

app.delete(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
  })
);

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
