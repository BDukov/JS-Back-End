const router = require('express').Router();

const {isAuth} = require('../middlewares/authMiddleware');
const animalManager = require('../managers/animalManager');

router.get('/', async (req, res) => {
    const cards = await animalManager.getAll().lean();

    res.render('home', {cards});
});

router.get('/404', (req, res) =>{ 
    res.render('404');
});



module.exports = router;