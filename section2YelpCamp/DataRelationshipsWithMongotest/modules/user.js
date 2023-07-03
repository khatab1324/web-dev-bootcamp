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

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  //now i want set addrest in array and this call ===(one to few)===look to pictcher
  address: [
    {
      street: String,
      city: String,
      state: String,
      country: {
        type: String,
        required: true,
      },

      //   NOTE: if you look for users collection you will see in address have own id why?
      // ok, mongoose Mongoose, on the other hand, actually is going to treat this behind the scenes as its own embeddedschema
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const user = new User({
    first: "khattab",
    last: "fayyad",
  });
  //look for this the array out
  user.address.push({
    street: "123 Sesame St.",
    city: "Amman",
    state: "NY",
    country: "JORDAN",
  });
  const result = await user.save();
  console.log(result);
};

//this is the second address
const addAddress = async (id) => {
  const user = await User.findById(id);
  user.address.push({
    street: "99 3rd St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await user.save();
  console.log(res);
};
addAddress("64a30b55e452b96024aab0f8");

// makeUser();
