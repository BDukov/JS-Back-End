const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home'); // This will render the index.hbs file in the views folder home
});

module.exports = router;