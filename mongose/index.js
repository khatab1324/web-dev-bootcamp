const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// mongoose.connect("mongodb://127.0.0.1:27017/test", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("hi there I am mongoose");
// });
// getting-started.js

main().catch((err) => {
  console.log("oh error");
  console.log(err);
});
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/moviesApp");
  console.log("I am here");
}

const MovieSchema = new mongoose.Schema({
  //Schema is tell mongosh the type of element and what should exapted
  name: String, //S capital
  year: Number, //N capital
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", MovieSchema); //very important M capital
//Movie will be in mongosh movies

// I comment it because I already add it
// const theFather = new Movie({
//   name: "theFather",
//   year: 2020,
//   score: 8.2,
//   rating: "R",
// });
// write node
// and then .load index.js
// now you have access to theFather

//write theFather.save() in node to save it in mongosh

// Movie.insertMany([
//   { name: "theFather", year: 2020, score: 8.2, rating: "R" },
//   { name: "seee", year: 2010, score: 7.2, rating: "Rd" },
//   { name: "look", year: 2009, score: 6.2, rating: "gr" },
//   { name: "straingerThings", year: 2025, score: 6.5, rating: "R" },
//   { name: "dark", year: 2014, score: 9.6, rating: "R" },
// ]) //we don't need call save when we use insertMany
//   // and it will return parmis
//   .then((data) => {
//     console.log("your data added ");
//     console.log(data);
//   });
// write node index.js
// Movie.deleteMany({ year: { $gte: 15 } })
//   .then(function () {
//     console.log("Data deleted"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });
//whatch 393 realy it hard to explan but to know he tell what is the query and you can use .then()
// .... with it but it not pramis and use node and then load this file
// to git the data Movie.find().then((data)=>console.log(data))
// spasifc data Movie.find({score:6.5}).then((data)=>console.log(data))

// if you don't type .then the node will return for you very big object

//

// https://mongoosejs.com/docs/6.x/docs/api/model.html

// to see all the module module.find({})
// to update findOneAndUpdate(conditions, update)
// to upadate and see the changes  Movie.findOneAndUpdate({name:"dark"}, {score:9},{new:true}).then(m=>console.log(m))
//....just add {new:true} to see the current change
