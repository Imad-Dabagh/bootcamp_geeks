const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    res.send("This is HomePage");
});

router.get("/about", (req, res) => {
  res.send("This is About Page");
});

module.exports = router;




// const { getHomePage, getAboutPage } = require("../controllers/controllers.js");

// router.get("/", getHomePage);
// router.get("/about", getAboutPage);