const express = require("express");
const morgan = require("morgan"); //morgan take info from http req and put it in your terminal
const app = express();

// =======================middelware============
// middleware its function run in every req
// app.use(() => {
//   console.log("I am middelware");
// }); //it work in every single req
// app.use(express.json()) this middleware tell : in every req send the parse as json
// app.use(express.urlencoded())it tell in every req send this function

// =================make our middelwar================

// this middelwere work in every req
// app.use((req, res) => {
//   console.log("here I am ");
//   res.send("I am work in very req");
// });

//            // app.use() ==> work in every req

// OK THIS LINK SHOW YOU  HOW TO MAKE MIDDELWERE ==> https://expressjs.com/en/guide/writing-middleware.html

// ============= for test

app.use(morgan("tiny")); // I tell every single req send morgan('tiny')
//....morgan('tiny)it send info about longging req
// NOTE : morgan run and then next to another middelwere becuase of that it printed at terminal on every req

app.use((req, res, next) => {
  console.log("here I am ");

  next(); // if you don't call next the next middelwere will not run
  console.log("it still running after next() finsh");
});
app.use((req, res, next) => {
  console.log("here I am 2");
  return next();
  console.log("this code will not run after return");
});

// you can handle path like this
app.use("/", (req, res, next) => {
  console.log(`I use meddelwere to for this path`);
  next();
});

const functionImakeToControlInReq = (req, res, next) => {
  //your code
  next();
};
// ============ web page ===========

app.get("/", functionImakeToControlInReq, (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("HOME PAGE!");
});

app.get("/page2", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("you are in page 2");
});
// for page not found
app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});
app.listen(3000, () => {
  console.log("============YOY are in port 3000!==============");
});
