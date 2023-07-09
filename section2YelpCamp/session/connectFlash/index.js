const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const categories = ["fruit", "vegetable", "dairy"];
const Product = require("./models/product");
const Farm = require("./models/farm");
const session = require("express-session");
// ======this falsh======
// The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user. The flash is typically used in combination with redirects, ensuring that the message is available to the next page that is to be rendered.
const flash = require("connect-flash");
// ==========how to use it ========
// app.get('/flash', function(req, res){
//   // Set a flash message by passing the key, followed by the value, to req.flash().
//   req.flash('info', 'Flash is back!')//here you make the flash
//   res.redirect('/');
// });

// app.get('/', function(req, res){
//   // Get an array of flash messages by passing the key to req.flash()
//   res.render('index', { messages: req.flash('info') });//here you add the flash to show in the index.ejs
// });

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });
// ================ejs==========================
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//================use===========================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(flash());
// this to use session its important to let flash work
const sessionOptions = {
  secret: "thisisnotagoodsecret",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(flash());

//===============middleware============================
app.use((req, res, next) => {
  //now i have access for message on every thing
  res.locals.messages = req.flash("success");
  next();
});
// ======================farm========================
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/index", { farms, message: req.flash("success") }); //the same name in flash that under
  //i pass massge to ejs
});
app.post("/farms", async (req, res) => {
  const newFarm = new Farm(req.body);
  await newFarm.save();
  req.flash("success", "you successfully added the farm");
  res.redirect("/farms");
});
app.get("/farms/new", async (req, res) => {
  res.render("farms/new");
});
app.get("/farms/:id", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id).populate("products");
  res.render("farms/show", { farm });
});

app.get("/farms/:id/products/new", (req, res) => {
  const { id } = req.params;
  res.render("products/newProduct", { categories, id });
});
app.post("/farms/:id/products", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  const { name, price, category } = req.body;
  const newProduct = new Product({ name, price, category });
  farm.products.push(newProduct);
  Product.farm = farm;
  farm.save();
  newProduct.save();
  res.redirect(`/farms/${id}`);
});

app.delete("/farms/:id", async (req, res) => {
  const farm = await Farm.findByIdAndDelete(req.params.id);

  res.redirect("/farms");
});

app.listen(2000, () => {
  console.log("server satrt on port 2000");
});
