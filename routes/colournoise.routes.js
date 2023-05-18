const router = require("express").Router();

// GET Route to page to display info about white noise
router.get("/whitenoise", (req, res) => {
    res.render('landingpage/whitenoise.hbs');
  });

module.exports = router;