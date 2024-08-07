const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    // read the token from header or url
    let token = req.headers['x-access-token'] || req.headers['authorization'];

    if (token && token.startsWith('Bearer')) {
        token = token.slice(7, token.length);
    }

    // token does not exist
    if (!token) {
        return res.status(403).json({
            success: false,
            message: 'not logged in',
        });
    }

    // create a promise that decodes the token
    const p = new Promise((resolve, reject) => {
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) reject(err);
            resolve(decoded);
        });
    });

    // process the promise
    p.then((decoded) => {
        req.decoded = decoded; // decoded에 유저 정보가 들어있다.
        next();
    }).catch((error) => {
        res.status(403).json({
            success: false,
            message: error.message,
        });
    });
};

module.exports = authMiddleware;
