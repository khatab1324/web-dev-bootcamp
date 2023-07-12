module.exports.isLoggedIn = (req, res, next) => {
  // console.log("REQ.USER", req.user); //its will autocomplete from passport and the passport will use the session, to show the user that in session
  //but I will put it in middleware and use it in every method and it I call it currntUser you can see app.js

  //if the user want to add review or something else but he is not register when he submit the comment the login page will show to him , after he is login or register i , will return him in the same page he was on there to do that
  //..... I need to save his url in session
  //store the url thet are requsting!
  //   console.log(req.path, req.originalUrl);//req.path or req.originalUrl they are the same thing

  if (!req.isAuthenticated()) {
    // isAuthenticated() it come from passport it check if you logged in

    req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be signed in first!");
    return res.redirect("/login");
  }

  next();
};
module.exports.storeReturnTo = (req, res, next) => {
  if (req.session.returnTo) {
    res.locals.returnTo = req.session.returnTo;
  }
  next();
};
