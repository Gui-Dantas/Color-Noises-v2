const router = require("express").Router();

// GET route to display the favorite sounds
router.get('/favoritelist', (req, res)=>{
    res.render('favorites/favorites-list.hbs');
});

module.exports = router;