//lituer number 345
// we have alot of tools help us like EJS (embedded Javascript templaing) and handlebars and jade and pug and nunjukcs
// but we will use EJS becauase it use js sentax not like another tools
const experss = require("express");
const app = experss();
// sometime you want to run code form out you will write this folder/secondFolder.... but this issue in ejs you can't run the files , you should in the folder because that we use path
const path = require("path");
const redditdata = require("./data.json");
console.log(redditdata);

// app.set(name, value)
// Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server. These special names are listed in the app settings table.
// https://expressjs.com/en/4x/api.html#app.set there alot of proprty you can use them

app.set("view engine", "ejs");
//
app.set("views", path.join(__dirname, "/views")); //we tell them where ejs is located

app.get("/", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("subreddit.ejs", { randN: num }); // render it to render the code into and you don't have to write this res.render("home.ejs, ")
});
app.listen(3000, () => {
  console.log("listen on port 3000");
});
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditdata[subreddit];
  console.log(data);
  res.render("subreddit", { subreddit });
});
