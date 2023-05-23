const express = require("express"); //here we call express to run our sever
const app = express(); //app is object that represents a set of method and middelware
//...and deffine some router for HTTP methods (such as GET, POST, PUT, DELETE)
const path = require("path");

app.use(express.urlencoded({ extended: true })); //to get req.body that in url
app.use(express.json()); //It parses incoming requests with JSON payloads and is based on body-parser.
//...body-parser Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); //to run ejs

const comments = [
  { username: "khatab", comment: "i will arive" },
  { username: "sail", comment: "he just poor boy form poor family" },
  { username: "sois", comment: "that what is called the love" },
  { username: "roroies", comment: "pichaes pichaes pichaeeeeeeeees" },
];
app.get("/tacos", (req, res) => {
  res.send("here i am");
});

app.post("/tacos"),
  (req, res) => {
    res.send("here i am");
  };
// ===================get all comments=================
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});
// ===================creat new comment==================
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
console.log(comments);
app.post("/comments/new", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  console.log(req.body);

  res.redirect("/comments");
});

app.listen(2000, () => {
  console.log("hi there");
});
