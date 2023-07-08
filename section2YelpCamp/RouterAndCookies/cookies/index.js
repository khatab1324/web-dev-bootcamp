// what is cookies?Cookies are little bits of information that are stored in a user's browser when browsing a particular website.
// ......Once a cookie is set, a user's browser will send the cookie on every subsequent request to the site.
//....... Cookies allow use to make HTTP stateful
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser("thisismysecret")); //here i put the secrest

app.get("/getcookies", (req, res) => {
  console.log(req.cookies);
  //   if the name is embdy set it to no added
  const { name = "No-added" } = req.cookies;
  res.send(`we make req with this cookies ${name}`);
});

app.get("/pickname", (req, res) => {
  res.cookie("name", "khattab fayyad"); //there more https://expressjs.com/en/5x/api.html#res.cookie
  //   now we set name value in cookies is khattab%20fayyad

  // to update name just put the new value
  res.cookie("name", "neigen");
  res.cookie("anyNameYouPutHere", "here i am");
  res.send("we set your name ");
});
// what is signing cookies?Basically, it's going to sign it and then send this weirder looking version of our cookie to the client.Then on the client side, that weird looking version, the signed version will be sent back just like any other cookie. It's just a regular old cookie.But on the server side, when we're looking at the cookies that have been sent to us, we'll be able to verify our cookie parser will be able to verify and tell us if any of those signed cookies have been tampered with. Essentially, if they're the exact same value that was sent, you know, if somebody screwed with them So signing is not about hiding the information. It is about making sure that the original data that we sent to the client, to the browser, is still the data being sent back to us.
//that mean the value does't change even you change it manuly it will show you when you refresh the page emdy object
app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true }); //the theired agrumnet
  //   if you open fruit cookies you will finds%3Agrape.se3HPXz7tp1xWsZqVqT0JM9CNksttnEAehi97gBKKo8 and look there is agrape
  // It's not about hiding it.It's about verifying the integrity or the validity or the I don't know, out of words here, it's about
  res.send("OK SIGNED YOUR FRUIT COOKIE!");
});

app.get("/verifyfruit", (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send(req.signedCookies); //it will send the cookies that signed in our case fruit
});

// if you want to get the cookies and parser it in req you need npm libary called cookie-parser
// npm i cookie-parser
port = 3000;
app.listen(port, () => {
  console.log(`opened on port ${port}`);
});
