const mongoose = require("mongoose");
const { Schema } = mongoose;

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

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" }, //user id to use it with tweet
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweets = async () => {
  //   const user = new User({ username: "chickenfan99", age: 61 });
  //   const tweet1 = new Tweet({
  //     text: "I love apple",
  //     likes: 0,
  //   });
  //   const user = await User.findOne({ username: "chickenfan99" });
  //   this call one to bajilions you call the perent in the child
  //   const tweet2 = new Tweet({
  //     text: "bock bock bock my chickens make noises",
  //     likes: 1239,
  //   });
  //   tweet1.user = user;
  //   user.save();
  //   tweet1.save();
  //   const user = await User.findOne({ username: "chickenfan99" });
  //   const tweet2 = new Tweet({
  //     text: "bock bock bock my chickens make noises",
  //     likes: 1239,
  //   });
  //   tweet2.user = user;//i make user inside tweet2 from user I call
  //   tweet2.save();//I save tweet2 in tweets collection
  //   console.log(user);
};

// makeTweets();

const findTweet = async () => {
  const t = await Tweet.find({}).populate("user"); //populate its explained in farm.js
  //   if I want just username I can use populate  .populate("user","username")
  console.log(t);
};

findTweet();
