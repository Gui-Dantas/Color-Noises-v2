const router = require("express").Router();

// Require the Noise Model 
const Noise = require('../models/Noise.model');

// GET Route home page after the login
router.get("/home", async (req, res) => {
  try{
    let foundNoises = await Noise.find();
    res.render('color-noise/home.hbs', {noises: foundNoises});
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;
