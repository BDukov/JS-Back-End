const router = require('express').Router();

router.get('/catalog', (req, res) => {
    res.render('games/catalog');
});

module.exports = router;