const express = require("express");
const app = express();
const RouterHomePage = require("./routes/homepage");
const RouterAdmin = require("./routes/admin");
app.use("/homepage", RouterHomePage); //So what is this path here?Well, this is going to specify the prefix of all of the routes that we've predefined in that router.
// We're just saying take all of those routes from that router and apply them to our app and prefix them with nothing, just with Slash.
app.use("/admin", RouterAdmin);
app.listen(3000, () => {
  console.log("Serving app on localhost:3000");
});
