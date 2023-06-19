const router = require('express').Router();

const animalManager = require('../managers/animalManager');

const { getErrorMessage } = require('../utils/errorHelpers');
const { isAuth } = require('../middlewares/authMiddleware');


router.get('/dashboard', async (req, res) => {
    const cards = await animalManager.getAll().lean();
    res.render('animals/dashboard', { cards });
});

router.get('/create', (req, res) => {
    res.render('animals/create');
});

router.post('/create', isAuth, async (req, res) => {
    const { name, years, kind, image, need, location, description } = req.body;
    const owner = req.user._id;

    try {
        await animalManager.create({ name, years, kind, image, need, location, description, owner });
        res.redirect('/animals/dashboard');
    } catch (err) {
        res.render('animals/create', { error: getErrorMessage(err) });
    }
});

router.get('/details/:animalId', async (req, res) => {
    const animalId = req.params.animalId;
    const animal = await animalManager.getOne(animalId).lean();
    const isOwner = req.user?._id == animal.owner._id;
    const donations = await animalManager.getDonations(animalId).lean();
    const isDonated = donations.donations.includes(req.user._id);

    res.render('animals/details', { animal, isOwner, isDonated });
});

router.get('/edit/:animalId', isAuth, async (req, res) => {
    const animalId = req.params.animalId;
    const animal = await animalManager.getOne(animalId).lean();

    res.render('animals/edit', { animal });
});

router.post('/edit/:animalId', isAuth, async (req, res) => {
    const animalData = req.body;

    try {
        const animalId = req.params.animalId;
        await animalManager.edit(animalId, animalData);

        res.redirect(`/animals/details/${animalId}`);
    } catch (err) {
        res.render('animals/edit', { error: getErrorMessage(err), ...animalData });
    }
});

router.get('/delete/:animalId', isAuth, async (req, res) => {
    const animalId = req.params.animalId;

    try {
        await animalManager.delete(animalId);
        res.redirect('/animals/dashboard');
    } catch (err) {
        res.render('animals/details', { error: getErrorMessage(err) });
    }
});

router.get('/search', async (req, res) => {
    const animals = await animalManager.getAll().lean();

    res.render('animals/search', { animals });
});

router.post('/search', async (req, res) => {
    const { location } = req.body;
    const animals = await animalManager.getByLocation(location).lean();
    
    res.render('animals/search', { animals });    
});

router.get('/donate/:animalId', isAuth, async (req, res) => {
    const animalId = req.params.animalId;
    const animals = await animalManager.getOne(animalId);

    animals.donations.push(req.user._id);
    await animals.save();

    res.redirect(`/animals/details/${animalId}`);
});


module.exports = router;