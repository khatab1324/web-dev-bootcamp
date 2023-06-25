const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
// ============ web page ===========
app.use((req, res, next) => {
  req.method = "GET"; //that change reqs to get if they not get like post ....
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});
// function to cheack the password
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "1234") {
    next();
  }
  res.send("YOU NEED A PASSWORD!");
};

app.get("/", (req, res) => {
  console.log(`REQUEST DATE`);
  res.send(`<!DOCTYPE html>
  <html>
  <head>
    <title>Home Page</title>
  </head>
  <body>
    <div style="text-align: center; margin: 100px auto;">
      <h1 style="font-size: 36px; color: #333;">Welcome to My Website</h1>
      <p style="font-size: 18px; color: #666;">This is a simple home page.</p>
      <a href="about.html" style="display: inline-block; margin-top: 20px; margin-right: 10px; padding: 10px 20px; background-color: #333; color: #fff; text-decoration: none; border-radius: 4px;">About</a>
      <a href="contact.html" style="display: inline-block; margin-top: 20px; margin-right: 10px; padding: 10px 20px; background-color: #333; color: #fff; text-decoration: none; border-radius: 4px;">Contact</a>
    </div>
  </body>
  </html>`);
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("I love my laptop");
});
app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html>
  <html>
  <head>
    <title>Page Not Found</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
  
      .container {
        text-align: center;
        margin: 100px auto;
      }
  
      h1 {
        font-size: 120px;
        color: #333;
        margin: 0;
      }
  
      p {
        font-size: 24px;
        color: #666;
      }
  
      a {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #333;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/">Go back to homepage</a>
    </div>
  </body>
  </html>`);
});
app.listen(2000, () => {
  console.log("============YOY are in port 2000!==============");
});
