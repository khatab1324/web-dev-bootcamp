//this for dotenv//processed invoice node environment is an environment variable that is usually just development
//....we're saying if we're running in development mode.if we're in development, yes, we are in development require the EMV package, which is going to take the variables I've defined in .env file and add them into processed
//it's mean it take secret file and add it here
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
//new we can access to this key in any file
// console.log(process.env.SECRET);//i comment the SECRET
// =================require laibary============================
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate"); //this for layout to put all the html in it like cjs if you remmeber
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const multer = require("multer"); //it use for upoalde image and file //usage :Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
// const { storage } = require("./cloudinary"); //it auto will know index.js file
// const upload = multer({ dest: "uploads/" }); //here you specify the destination for where you will save your file //this just a demo in real world ,we don't save our fail locally
// const upload = multer({ storage }); //here you tell the muter to save the data in cloudinter
const mongoSanitize = require("express-mongo-sanitize"); //this laibary to prevent any thing like {} or something that use code like users%20=db.users.find(%7Busername:%7B"$gt":""%7D%7D)
const app = express();
// =======================require file ==========================
const catchAsync = require("./utils/catchAsync");
const ExpressError = require("./utils/ExpressError");
const methodOverride = require("method-override");
const campgroundsRouter = require("./router/campgrounds");
const reviewsRouter = require("./router/reviews");
const User = require("./models/user");
const userRoutes = require("./router/user");

mongoose.set("strictQuery", false); //DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
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

app.use(mongoSanitize()); //I here use it now if someone send this http://localhost:2023/?db.users.find(%7Busername:%7B%22$gt%22:%22%22%7D%7D) you will look for query like if console.log(req.query) you will find {} but if was normal like username=khattab you will find in console {username:khattab}

app.use(flash()); //I use flash ,that short action happen for one like when you add product it show you product add ,when you refresh it will goes

// ==========passport===================
// they must be under session
//passport update and passport initialize doesn't exist yet but i just follow code colt
app.use(passport.initialize()); //It just tells us that we need that passport.Session middleware if we want persistent login sessions versus the alternative would be having to login on every single request,
//that meanis a middle-ware that initialises Passport.Intializes Passport for incoming requests, allowing authentication strategies to be applied.
app.use(passport.session()); //is another middleware that alters the request object and change the 'user' value that is currently the session id (from the client cookie) into the true deserialized user object.
// for more explain https://stackoverflow.com/questions/46644366/what-is-passport-initialize-nodejs-express/46645936#46645936

//you must know the passport.initialize() and passport.session()) .That all has to do with how information is stored and retrieved from the session anyway.

passport.use(new LocalStrategy(User.authenticate())); //So what we're saying here is that, hello, passports.We would like you to use the local strategy that we have downloaded and required.
//....And for that local strategy, the authentication method is going to be located on our user model andit's called authenticate.
//... we don't have method called authentication we made , but its come from But again, it's coming from this passport local mongoose
//authenticate() Generates a function that is used in Passport's LocalStrategy

passport.serializeUser(User.serializeUser()); //This is telling passports how to serialize a user.
//And serialization refers to basically how do we get data or how do we store a user in the session?
// that mean its Generates a function that is used by Passport to serialize users into the session

passport.deserializeUser(User.deserializeUser()); //How do you get a user out of that session?

// ========================middleware flash and passport =================
// I can't put it above because the currentUser debend on serializeUser and deserializer if you put it above them the currentUser will be undifine
app.use((req, res, next) => {
  //this for using flash every where
  console.log(req.query);
  res.locals.currentUser = req.user; //I explain it in middleware.js req.user ,the passport will deal with it
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  //i can use any of this variable in every where

  next();
});
//====================use router====================
app.use("/", campgroundsRouter);
app.use(reviewsRouter);
app.use(userRoutes);
// ================================== methods ==============================
// app.get("/fackUser", async (req, res) => {
//   const user = new User({
//     //in our Schema we have email and username do put more then email or username
//     email: "khatab@gmail.com",
//     username: "ks1",
//   });
//   const newUser = await User.register(user, "12345678"); //register(user, password, cb) Convenience method to register a new user instance with a given password.

//   res.send(newUser); //look it have hash and  salt and username  and email
// });

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
