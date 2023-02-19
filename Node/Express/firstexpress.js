const express = require("express");
// now execute express
const app = express();
// console.dir(app);//before make our server we should start listing

app.listen(3000, () => {
  console.log("here the listen and it port");
}); // now the app.lesten just listen for the new request
// and if you search on google http://localhost:2000 you will find Cannot GET / that mean there is sever but no respons
// app.use((req, res) => {
//   console.log("we have got a request ^-^");
//   //   console.dir(req);

//   res.send("we have got your response just wite i second"); //it send respnes for the user
//   res.send({ color: "red" });
// }); //if you sereach again you will have in your terminal this massig  we have got a request ^-^
// that mean any request you .use will send you this masseag

// i will note it because when we send the request we done

// .use((req, res)) req => request the order we have got  | res => respons what we will send
// if you write sereach http://localhost:2000/hoppy the pathname in request will asking you for hoppy you will find pathname in dir(req)

// .get it expect tow thing first one is the path and the second one is call back function
app.get("/hoppy", (req, res) => {
  console.log("hoppy request");
  res.send("this hoppy page");
});

app.get("/", (req, res) => {
  res.send("this home page");
});
app.post("/hoppy", (req, res) => {
  res.send("post request to /hoppy");
});
// app.get("*", (req, res) => {
//   res.send(`I don't know what you talk about`);
// }); //this for every thing eles

// but no one do that we should follow the pattern like this

// query srting
app.get("/search", (req, res) => {
  console.log(req.query);
  const { p } = req.query;
  res.send(`do want search about somthing like : ${p}`);
});

app.get("/r/:subreddit", (req, res) => {
  // but i want to access what inside subreddit
  // ok , to access to subreddit or req there are proprity  called pramas
  console.log(req.params);
  const { subreddit } = req.params;
  res.send(`you sereach about ${subreddit}`);
});
