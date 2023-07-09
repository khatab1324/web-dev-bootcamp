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

// DELETE ALL ASSOCIATED PRODUCTS AFTER A FARM IS DELETED//and this is middlewere
farmSchema.post("findOneAndDelete", async function (farm) {
  //when we use async we aculy don't need use next()
  //....becuase it return a promice
  if (farm.products.length) {
    const res = await Product.deleteMany({ _id: { $in: farm.products } });
    console.log(res);
  }
});

const Farm = mongoose.model("Farm", farmSchema);
module.exports = Farm; //creating and exporting the Farm model.This makes it so we can import the model into other parts of the program
