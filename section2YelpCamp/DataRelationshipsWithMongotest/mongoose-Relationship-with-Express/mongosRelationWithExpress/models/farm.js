const mongoose = require("mongoose");
const { Schema } = mongoose;
const farmSchema = new Schema({
  name: {
    type: String,
    required: [true, "farm most have name"], //to make message
  },
  city: {
    type: String,
    required: [true, "you most mention the farm city"],
  },
  email: {
    type: String,
    required: [true, "to call you we need your email "],
  },
  //   now I will call product in our farm and this is the new
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Farm = mongoose.model("Farm", farmSchema);
module.exports = Farm; //creating and exporting the Farm model.This makes it so we can import the model into other parts of the program
