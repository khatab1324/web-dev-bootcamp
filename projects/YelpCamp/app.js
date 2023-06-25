const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const Campground = require("./models/campground");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate"); //this for layout to put all the html in it like cjs if you remmeber
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

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// ================================== methods ==============================
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

app.post("/campgrounds", async (req, res) => {
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
});

app.get("/campgrounds/:id", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/show", { campground });
});

app.get("/campgrounds/:id/edit", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/edit", { campground });
});

app.put("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  res.redirect(`/campgrounds/${campground._id}`);
});

app.delete("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect("/campgrounds");
});

app.listen(2023, () => {
  console.log("Serving on port 2023");
});
