const router = require('express').Router();

const gameManager = require('../managers/gameManager');

router.get('/catalog', async (req, res) => {
    const games = await gameManager.getAll();
    res.render('games/catalog', { games });
});

module.exports = router;