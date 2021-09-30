const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports =
  (credentials = []) =>
  (req, res, next) => {
    if (typeof credentials === 'string') {
      credentials = [credentials];
    }
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const tokenBody = token.slice(7);
    jwt.verify(tokenBody, config.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Access denied' });
      }
      if (credentials.length > 0) {
        if (
          (decoded.scopes && decoded.scopes.length,
          credentials.some((cred) => decoded.scopes.indexOf(cred) >= 0))
        ) {
          next();
        } else {
          return res.status(401).json({ message: 'Access denied' });
        }
      }
    });
  };
