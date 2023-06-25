const express = require("express");
const morgan = require("morgan");
const app = express();
const AppError = require("./appError");

app.use(morgan("tiny"));
// ============ web page ===========
//make function for error

const error = () => {
  throw new AppError("you need password!", 401);
};
// function to cheack the password
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "1234") {
    next();
  }
  error();
};

app.get("/", (req, res) => {
  console.log(`REQUEST DATE`);
  res.send(`you at home page`);
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("I love my laptop");
});
// this for error path
//===================================================
app.get("/error", (req, res) => {
  undifineName(); //this cause error
});
//===================================================
app.use((req, res) => {
  res.status(404).send(`this page not found`);
});

// this middelwere handling errors

// app.use((err, req, res, next) => {
//   console.log("======================error====================");
//   console.error(err.stack);
//   console.log("======================error===================");
//   res.status(500).send("oh shit there is error");
//   // if you put next()
//   // If you pass anything to the next() function (except the string 'route'), Express regards the current request as being an error and will
//   // ....skip any remaining non-error handling routing and middleware functions.
// });
app.listen(2000, () => {
  console.log("============YOY are in port 2000!==============");
});
