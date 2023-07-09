// =================require laibary============================
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate"); //this for layout to put all the html in it like cjs if you remmeber
const session = require("express-session");
const flash = require("connect-flash");
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

// ====================session===========
const sessionConfig = {
  secret: "thisshouldbeabettersecret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    //now i wrtie my cookies open cookies you will find it
    httpOnly: true, //this for securty of cookies you can search just search httpOnly
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, //this number is week long//this becuase Date.now its number like this 1688917466197
    maxAge: 1000 * 60 * 60 * 24 * 7,
    // NOTE: we use expires for ,like user sign-in ,we won't from him to sign for ever becuase of that after week the expire finsh and he will sign out
    // my date now is 2023/7/6 if you open the cookies you will find in expires 2023-07-16T15:43:43.716Z
  },
};
app.use(session(sessionConfig));

//========================= middlewere=========================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public"))); //I tell express use public file
// ....and use it if you call it from evry where just call it

app.use(flash()); //I use flash ,that short action happen for one like when you add product it show you product add ,when you refresh it will goes
app.use((req, res, next) => {
  //this for using flash every where
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
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
