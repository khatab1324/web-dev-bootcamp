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

//   =======================schema validation===================
// its condintions you make it for schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //requiren validation seyes name must be exist if you don't pass it ,it will give you err
    maxlength: 20,
  },
  price: {
    type: Number,
    min: [0, "Price must be positive ya dodo!"], //custome erorr messege
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String], //if there Numebr it will convert the number to string
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});
//VAILDATOION work when you make new model but it not work when you update
// .....to make validation work in update {runValidation:true}
// const Product = mongoose.model("Product", productSchema);
// const bike = new Product({
//   name: "bike helmet",
//   price: 19,
//   categories: ["Cycling", "safty", "fastest man in lifa"],

// });
// bike
//   .save()
//   .then((data) => {
//     console.log("yes it work");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("----------there erorr if you don't know----------");
//     console.log(err);
//   });

// Product.findOneAndUpdate(
//   { name: "RR15" },
//   { price: 9000, size: "L" },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("IT WORKED!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("OH NO ERROR!");
//     console.log(err);
//   });

//   ===========================instance methods===================
// productSchema.methods.greet = function () {
//   console.log("hello world!");
//   console.log(`__from ${this.name}`);
// }; //becarful=========there const Product above
// when you pass function the Product should the last thing becuase I pass value to productSchema.methods.greet
// .... that meen Product should be after it , becuase I pass in Product productSchema

// if you have alot of boolian option and you want to navgate them
productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  //save
  return this.save();
};
productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};
productSchema.methods.addStor = function (num) {
  this.qty.inStore = num;
  this.qty.online = this.qty.inStore;
  return this.save();
};

// ========statc it just fancy way to update or delete or find .........
productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);
const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "RR15" });
  //   console.log(foundProduct);
  //   await foundProduct.toggleOnSale();
  //   console.log(foundProduct);
  //   await foundProduct.addCategory("Outdoors");
  //   console.log(foundProduct);
  await foundProduct.addStor("7");
  console.log(foundProduct);
};

Product.fireSale().then((res) => console.log(res)); //this for static

findProduct();

// if your load product.js write const p= Product({name:"bike bag",price:19}) and write p it will give you {
//   name: 'bike bag',
//   price: 19,
//   categories: [],
//   qty: { online: 0, inStore: 0 },
//   _id: new ObjectId("647601b0b05d7fab5057509a")
// }
