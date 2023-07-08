const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    //http://localhost:3000/admin/topsecret?isAdmin=ture will run
    return next();
  }
  return res.send("SORRY NOT AN ADMIN!");
});

router.get("/topsecret", (req, res) => {
  res.send("THIS IS TOP SECRET");
});
router.get("/deleteeverything", (req, res) => {
  res.send("OK DELETED IT ALL!");
});

module.exports = router;
