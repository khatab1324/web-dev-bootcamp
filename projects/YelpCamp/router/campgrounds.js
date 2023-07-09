// ===========require file =====================
const catchAsync = require("../utils/catchAsync");
const { campgroundSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError");
const Campground = require("../models/campground");
// ===========require libary====================
const express = require("express");
const { models } = require("mongoose");
const router = express.Router();
//===========middleware========================

// ==========validation========================
const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
// ==========campgrounds=======================
router.get(
  "/campgrounds",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
  })
);
router.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});
//rether then using try and catch we call fucntion that catch the error
router.post(
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

router.get(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate(
      "reviews"
    ); //remember campground have reveiw inside it bu its Id becuase of that I call populate
    res.render("campgrounds/show", { campground });
  })
);

router.get(
  "/campgrounds/:id/edit",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render("campgrounds/edit", { campground });
  })
);

router.put(
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

router.delete(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id); //if change the findByIdAndDelete the mongose middlewere (findOneAndDelete)will not work, becuase it can't trigger the middlware
    res.redirect("/campgrounds");
  })
);

module.exports = router; //I write modele and this err show me Router.use() requires a middleware function but got a Object
