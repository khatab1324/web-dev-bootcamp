// ===========require file =====================
const catchAsync = require("../utils/catchAsync");
const { campgroundSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const Campground = require("../models/campground");
const { isLoggedIn } = require("../middleware");
// ===========require libary====================
const express = require("express");
const { models } = require("mongoose");
const router = express.Router();
// we expects you to have these dependencies installed. install three passport /passport local/passport local monoose
// npm install passport mongoose passport-local-mongoose
//===========middleware========================

// ==========validation========================
function validateCampground(req, res, next) {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
}
// ==========campgrounds=======================
router.get(
  "/campgrounds",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds,});
  })
);
router.get("/campgrounds/new", isLoggedIn, (req, res) => {
  res.render("campgrounds/new");
});
//rether then using try and catch we call fucntion that catch the error
router.post(
  "/campgrounds",
  isLoggedIn,
  validateCampground,
  catchAsync(async (req, res, next) => {
    console.log(req.body);
    // if (!req.body.campground)
    //   //this tell if the data emtdy like title price imge all of this emtdy throw error
    //   throw new ExpressError("Invalid Campground Data", 400);

    const campground = new Campground(req.body.campground);
    await campground.save();
    req.flash("success", "Successfully made a new campground!"); //here i spacifay the flash
    // we have res.locals.success = req.flash("success"); this locals we don't need to pass it to ejs
    // ...it just will take the message that above and pass it to ejs
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.get(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate(
      "reviews"
    ); //remember campground have reveiw inside it bu its Id becuase of that I call populate
    if (!campground) {
      req.flash("error", "Cannot find that campground!");
      // we have res.locals.success = req.flash("success"); this locals we don't need to pass it to ejs
      // ...it just will take the message that above and pass it to ejs
      return res.redirect("/campgrounds");
    }
    res.render("campgrounds/show", { campground });
  })
);

router.get(
  "/campgrounds/:id/edit",
  isLoggedIn,
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    if (!campground) {
      //it is happen if you delete campground and you have url like this http://localhost:2023/campgrounds/649711d1e12afc7dfda441cd this message wil shown to you
      req.flash("error", "Cannot find that campground!");
      // we have res.locals.success = req.flash("success"); this locals we don't need to pass it to ejs
      // ...it just will take the message that above and pass it to ejs
      return res.redirect("/campgrounds");
    }
    res.render("campgrounds/edit", { campground });
  })
);

router.put(
  "/campgrounds/:id",
  isLoggedIn,
  validateCampground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    });
    req.flash("success", "Successfully updated campground!");
    // we have res.locals.success = req.flash("success"); this locals we don't need to pass it to ejs
    // ...it just will take the message that above and pass it to ejs
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.delete(
  "/campgrounds/:id",
  isLoggedIn,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id); //if change the findByIdAndDelete the mongose middlewere (findOneAndDelete)will not work, becuase it can't trigger the middlware
    req.flash("success", "Successfully deleted campground");
    // we have res.locals.success = req.flash("success"); this locals we don't need to pass it to ejs
    // ...it just will take the message that above and pass it to ejs
    res.redirect("/campgrounds");
  })
);

module.exports = router; //I write modele and this err show me Router.use() requires a middleware function but got a Object
