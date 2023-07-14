const mongoose = require("mongoose");
const { campgroundSchema } = require("../schemas");
const Review = require("./review");
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: String,
  price: Number,
  imge: String,
  discription: String,
  location: String,
  //this call mongoose relationship there is hole section descose that
  author: {
    //this is authorzation that check this campground for this user , to edit on it or remove it
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});
// middleewre mogoose i am not sure if I wrtie it but you can find the  viedo 475 and 483
//this subject search about it read about it ....
CampgroundSchema.post("findOneAndDelete", async function (doc) {
  //because we have access to the doc we have delete it we can put argument doc that the thing we delete it and another resone why we can access to it we use post
  //try console.log(doc);and see the doc
  if (doc) {
    const ReviewRemove = await Review.deleteMany({ _id: { $in: doc.reviews } });
    //that mean we will remove where _id feild is in our document that was just deleted in its reviews array.
    //if you console.log(doc) you will see the review as array
  } //that mean doc have review id , if there review I will take this id and go to Review collcetion and remove it
});

module.exports = mongoose.model("Campground", CampgroundSchema);
