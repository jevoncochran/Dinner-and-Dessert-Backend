const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    const secret = 'top secret';

    if (authorization) {
        jwt.verify(authorization, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ errMsg: 'Invalid credentials' });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({ errMsg: 'Restricted middleware is stopping this call' });
    }
}