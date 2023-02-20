const express = require("express");
const app = express();

// req.body
// Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded().

app.listen(4000, () => {
  console.log("hi there");
});

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

app.get("/tacos", (req, res) => {
  console.log(req.body);
  res.send("got it");
});
