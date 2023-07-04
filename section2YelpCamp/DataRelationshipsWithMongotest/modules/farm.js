const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationshipDemo", {
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

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Summer", "Fall", "Winter"],
  },
});
// Product.insertMany([
//   { name: "Goddess Melon", price: 4.99, season: "Summer" },
//   { name: "Sugar Baby Watermelon", price: 4.99, season: "Summer" },
//   { name: "Asparagus", price: 3.99, season: "Spring" },
// ]);

//for now no something new

const farmSchema = new mongoose.Schema({
  // ok now one to many, one to many is you refrenc to object using ID
  // but when you write the type is object id you will not find in js type is object, then what we should do ?
  // ok, to make type is objectId ,mongoose have inside schema object is type we will use it
  name: String,
  city: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], //remember we don't have objId in js because of that we use mongoose schema type
  // ref =>the ref option is what tells Mongoose which model to use during population
  // that mean we should use the same name of the moduls
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

const makeFarm = async () => {
  const farm = new Farm({ name: "Full Belly Farms", city: "Guinda, CA" });
  const melon = await Product.findOne({ name: "Goddess Melon" });
  farm.products.push(melon);
  await farm.save(); //that save farm in mongoose
  console.log(farm);
  //look for that in node or js its same thing , it show you this{
  //   name: 'Full Belly Farms',
  //   city: 'Guinda, CA',
  //   products: [
  //     {//look it show you the object
  //       name: 'Goddess Melon',
  //       price: 4.99,
  //       season: 'Summer',
  //       _id: new ObjectId("64a3eabc3532950b52a1dc52"),
  //       __v: 0
  //     }
  //   ],
  //   _id: new ObjectId("64a3f416c3d3fd2ee2fb0310"),
  //   __v: 0
  // }

  //but in mongosh it show you that [
  //   {
  //     _id: ObjectId("64a3f416c3d3fd2ee2fb0310"),
  //     name: 'Full Belly Farms',
  //     city: 'Guinda, CA',
  //     products: [ ObjectId("64a3eabc3532950b52a1dc52") ],//products its use objectId
  //     __v: 0
  //   }
  // ]
};
// makeFarm();

// another examble
const addProduct = async () => {
  const farm = await Farm.findOne({ name: "Full Belly Farms" });
  const watermelon = await Product.findOne({ name: "Sugar Baby Watermelon" });
  farm.products.push(watermelon);
  await farm.save();
  console.log(farm);
};
// addProduct();

Farm.findOne({ name: "Full Belly Farms" })
  //because we have ref we can use populate
  //You have to have that ref in there to tell Mongoose that we're populating it with products, the actual
  // populate => Mongoose is going to take the ID that has been stored in that array for, in our case, the product ID and replace them with the corresponding products.
  // that mean it replace the id to products,that mean without id node will show you id ,with populate you will see products
  .populate("products")
  .then((farm) => console.log(farm));
