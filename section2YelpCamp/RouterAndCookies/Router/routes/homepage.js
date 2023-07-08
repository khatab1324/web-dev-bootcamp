const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is homepgae");
});
router.post("/", (req, res) => {
  res.send("CREATING HOMEPAGE");
});
router.get("/:id", (req, res) => {
  res.send("VIEWING ONE HOMEPAGE");
});
router.get("/:id/edit", (req, res) => {
  res.send("EDITING ONE HOMEPGAE");
});

module.exports = router;
