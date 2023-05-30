const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

// =================virtual===============
// virtual you can by use it make your own property
personSchema = new mongoose.Schema({
  first: String,
  last: String,
});
personSchema.virtual("fullName").get(function () {
  return `the fullName is : ${this.first} ${this.last}`;
});
const Person = mongoose.model("Person", personSchema);
// now load it and write const khattab= new Person({first:"khattab",last:"fayyad"})
// ...and write khattab.fullName
// ....whaaaaat ? did you see we make our property
// now khattab.save() to save it in mongosh

// ================middelware
personSchema.pre("save", async function () {
  this.first = "YO";
  this.last = "MAMA";
  console.log("ABOUT TO SAVE!!!!");
});
personSchema.post("save", async function () {
  console.log("JUST SAVED!!!!");
});
