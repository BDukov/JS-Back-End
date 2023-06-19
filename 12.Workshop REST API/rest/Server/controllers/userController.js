const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
       const result = await userManager.register(req.body);

        res.json(result)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    
    try{
        const result = await userManager.login(req.body);
        
        res.json(result);
    } catch (err) {
        res.status(400).json({ error: err.message }); 
    }

});

module.exports = router;