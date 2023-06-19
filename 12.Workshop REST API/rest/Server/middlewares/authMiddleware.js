const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    const token = req.header('X-Authorization');

    if (!token) {
        try{
            const decodedToken = jwt.verify(token, 'SECRET');
             
            res.user = decodedToken;

            next();
        } catch (err) {
            res.status(401).json({ error: err.message });
        }
    } else {
        next();
    }

};