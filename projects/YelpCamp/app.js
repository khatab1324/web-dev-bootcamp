const express = require("express");
const path = require("path");
const catchAsync = require("./utils/catchAsync");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");
const methodOverride = require("method-override");
const Campground = require("./models/campground");
const mongoose = require("mongoose");
const { campgroundSchema, reviewSchema } = require("./schemas");
const Joi = require("joi");
const ejsMate = require("ejs-mate"); //this for layout to put all the html in it like cjs if you remmeber
const { error } = require("console");
const review = require("./models/review");
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

const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
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
  validateCampground,
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
    const campground = await Campground.findById(req.params.id).populate(
      "reviews"
    ); //remember campground have reveiw inside it bu its Id becuase of that I call populate
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
  validateCampground,
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

app.post("/campgrounds/:id/reviews", validateReview, async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  //this will middlewere for that req that come from (form)in show.ejs
  const newReview = new Review(req.body.review); //that is because we are give the body or the rating kay
  // in show.ejs you will find review[body] review[rating] that is keys
  //now we will push the newReview to campground
  campground.reviews.push(newReview);
  //now we will save them
  await newReview.save();
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
});
app.delete(
  "/campgrounds/:campId/reviews/:reviewId",
  //you should know :campId it is not required that mean you can write :id

  catchAsync(async (req, res) => {
    const { campId, reviewId } = req.params;
    // we should remove the refrens Object id in campground for this review not for all review , just this review
    const deleteRefreceObjectIdInCampground =
      await Campground.findByIdAndUpdate(campId, {
        $pull: { reviews: reviewId }, // $pull  operator removes from an existing array all instances of a value or values that match a specified condition.
        // that mean pull goes to reviews and pull that value in our case reviewId and reviewId will not be exist any more in campground,you can find pull in mongoDB
      });
    const deleteReview = await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${campId}`);
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
