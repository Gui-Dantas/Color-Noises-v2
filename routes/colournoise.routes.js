const express = require("express");
const router = express.Router();

// GET Route to page to display info about white noise
router.get("/whitenoise", (req, res) => {
  res.render("dropdown/whitenoise.hbs");
});

// GET Route to page to display info about pink noise
router.get("/pinknoise", (req, res) => {
  res.render("dropdown/pinknoise.hbs");
});

// GET Route to page to display info about pink noise
router.get("/purplenoise", (req, res) => {
  res.render("dropdown/purplenoise.hbs");
});

// GET Route to page to display info about pink noise
router.get("/brownnoise", (req, res) => {
  res.render("dropdown/brownnoise.hbs");
});

// GET Route to page to display info about pink noise
router.get("/bluenoise", (req, res) => {
  res.render("dropdown/bluenoise.hbs");
});

// GET Route to page to display info about pink noise
router.get("/greynoise", (req, res) => {
  res.render("dropdown/greynoise.hbs");
});

module.exports = router;
