const Campground = require("../models/campground");
const { cloudinary } = require("../cloudinary"); //there inside it dirctory that distroy the imgs that in cloudinary
// ==========for map=============

const mapBoxToken = process.env.MAPBOX_TOKEN; //it will gose to .evn file and see mapbox_token
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
// to know more ubout them https://github.com/mapbox/mapbox-sdk-js
module.exports.index = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

module.exports.renderNewForm = (req, res) => {
  res.render("campgrounds/new");
};

module.exports.createCampground = async (req, res, next) => {
  //rether then using try and catch we call fucntion that catch the error
  // if (!req.body.campground)
  //   //this tell if the data emtdy like title price image all of this emtdy throw error
  //   throw new ExpressError("Invalid Campground Data", 400);
  const geoData = await geocoder
    .forwardGeocode({
      //forwardGeocode form map services //https://github.com/mapbox/mapbox-sdk-js/blob/main/docs/services.md#geocoding
      query: req.body.campground.location,
      limit: 1,
    })
    .send();
  console.log(geoData.body.features); //you can look to doc colt doesn't explain he said look at doc
  // https://github.com/mapbox/mapbox-sdk-js/blob/main/docs/services
  // https://github.com/mapbox/mapbox-sdk-js
  // res.send(geoData.body.features[0].geometry.coordinates); //features[0]becuase its array//it give you [-119.571615,37.737363]->[longitude,latitude] if you add to google map will not found this you should opposide it like this [37.737363,-119.571615] it will work and remove the
  const campground = new Campground(req.body.campground);
  campground.geometry = geoData.body.features[0].geometry;
  campground.images = req.files.map((f) => ({
    //map work just in array bacause of that images should be array
    url: f.path,
    filename: f.filename,
  }));
  //i need to return object becuase of that I need to wrap it with pranthecess()
  //NOTE : the user must be login to req.user be difine
  campground.author = req.user._id; //req.user it automatically add by passport
  await campground.save();
  console.log(campground);
  req.flash("success", "Successfully made a new campground!"); //here i spacifay the flash
  // we have res.locals.success = req.flash("success"); this locals we don't need to pass it to ejs
  // ...it just will take the message that above and pass it to ejs
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.showCampground = async (req, res) => {
  const campground = await Campground.findById(req.params.id)
    .populate({
      //i know this weried //now populate tell populate the review and the author that inside reviews becuause of that we use path
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("author"); //to have access to auther name //remember campground have reveiw inside it bu its Id becuase of that I call populate
  if (!campground) {
    req.flash("error", "Cannot find that campground!");
    // we have res.locals.success = req.flash("success"); this locals we don't need to pass it to ejs
    // ...it just will take the message that above and pass it to ejs
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/show", { campground });
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground) {
    //it is happen if you delete campground and you have url like this http://localhost:2023/campgrounds/649711d1e12afc7dfda441cd this message wil shown to you
    req.flash("error", "Cannot find that campground!");
    // we have res.locals.success = req.flash("success"); this locals we don't need to pass it to ejs
    // ...it just will take the message that above and pass it to ejs
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/edit", { campground });
};

module.exports.updateCampground = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const campground = await Campground.findById(id);
  const camp = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  const imgs = req.files.map((f) => ({ url: f.path, filename: f.filename })); //this make array and we don't push entire array inside existing array because of that
  //... I will make it inside imgs and spreade it and push like push the info into array
  campground.images.push(...imgs); //we need to push because it exist

  campground.save();
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      //delete for each img that in req.body.deleteImages
      await cloudinary.uploader.destroy(filename);
    }

    await campground.updateOne({
      //here we delete it form mongoos
      $pull: { images: { filename: { $in: req.body.deleteImages } } }, //pull its pull the element out of the array
      //in above line I tell him pull form images array filename that (in) req.body.deleteImages
    });
    console.log(campground);
  }
  req.flash("success", "Successfully updated campground!");
  // we have res.locals.success = req.flash("success"); this locals we don't need to pass it to ejs
  // ...it just will take the message that above and pass it to ejs
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteCampground = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id); //if change the findByIdAndDelete the mongose middlewere (findOneAndDelete)will not work, becuase it can't trigger the middlware
  req.flash("success", "Successfully deleted campground");
  // we have res.locals.success = req.flash("success"); this locals we don't need to pass it to ejs
  // ...it just will take the message that above and pass it to ejs
  res.redirect("/campgrounds");
};
