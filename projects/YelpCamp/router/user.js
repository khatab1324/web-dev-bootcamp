const express = require("express");
const router = express.Router();
const passport = require("passport");
// ============requir files =============
const catchAsync = require("../utils/catchAsync");
const User = require("../models/user");
const { storeReturnTo } = require("../middleware");

router.get("/register", (req, res) => {
  res.render("users/register");
});
router.post(
  "/register",
  catchAsync(async (req, res) => {
    try {
      //i want when there something went wrong like using same username , i want falsh message show to user becuase that I use try and catch
      const { username, email, password } = req.body;
      const user = new User({ email, username });
      const newUser = await User.register(user, password); //open app.js look for method called fackUser I explain User.register there
      console.log(newUser);
      //now after the user register ,we automaticly let him longin
      req.login(newUser, (err) => {
        if (err) {
          //that impassiple to get err at this point becuase you are successfully signUp but maby
          return next(err);
        }
        // you should put the redirect inside login
        req.flash("success", "welcome in yelp camp");
        res.redirect("/campgrounds");
      });
      // Log In
      // Passport exposes a login() function on req (also aliased as logIn()) that can be used to establish a login session.
      // req.login(user, function(err) {
      //   if (err) { return next(err); }
      //   return res.redirect('/users/' + req.user.username);
      // });
      // When the login operation completes, user will be assigned to req.user.
      // Note: passport.authenticate() middleware invokes req.login() automatically. This function is primarily used when users sign up, during which req.login() can be invoked to automatically log in the newly registered user.
    } catch (error) {
      req.flash("error", error.message);
      res.redirect("/register");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("users/login");
});
router.post(
  "/login",
  // use the storeReturnTo middleware to save the returnTo value from session to res.locals
  storeReturnTo,
  // passport.authenticate logs the user in and clears req.session
  passport.authenticate(
    //passport.authenticate ==>to hash a incoming password and compare that to the hashed output in our database and use that to authenticate a user.
    "local", //we here spasify the strotegy and you can authenticate to google also
    {
      failureFlash: true, //this it just will flash the message for you automaticly
      failureRedirect: "/login", //if thing gose wrong it will redircte to longin
    }
  ),
  (req, res) => {
    req.flash("success", "welcome back!");
    console.log(req.session.returnTo);
    const redirectUrl = res.locals.returnTo || "/campgrounds"; //if the req.session.returnTo is not define let the redirctUrl ecual campgrounds
   // in 529 show you how to fix the redirect issue very very important
    res.redirect(redirectUrl);
  }
);
// router.get('/logout', (req, res) => {
//     req.logout();
//     req.flash('success', "Goodbye!");
//     res.redirect('/campgrounds');
// })//you might see this error when you test out the logout functionality: req#logout requires a callback function
// This happens because in the latest versions of Passport.js, the req.logout() method now requires a callback function passed as an argument. Inside this callback function, we will handle any potential errors and also execute the code to set a flash message and redirect the user.

router.get("/logout", (req, res, next) => {
  //here we use call pack
  req.logout(function (err) {
    //logout its come with passport
    if (err) {
      return next(err);
    }
    req.flash("success", "Goodbye!");
    res.redirect("/campgrounds");
  });
});

module.exports = router;
