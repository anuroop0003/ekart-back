const jwt = require('jsonwebtoken');
const configJWT = require('../utils/configJWT');

// Middleware to check token validity
exports.verifyToken = (req, res, next) => {
  const accessToken = req.header('x-access-token');
  const refreshToken = req.header('x-refresh-token');

  if (!accessToken || !refreshToken) {
    return res.status(403).send('Access Denied. No token provided.');
  }
  try {
    const decoded = jwt.verify(accessToken, configJWT.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    if (!refreshToken) {
      return res.status(403).send('Access Denied. No refresh token provided.');
    }
    try {
      const decoded = jwt.verify(refreshToken, configJWT.jwtSecret);
      const newAccessToken = jwt.sign(
        { user: decoded.user },
        configJWT.jwtSecret,
        { expiresIn: configJWT.jwtExpiresIn }
      );
      res.setHeader('x-new-access-token', newAccessToken);
      next();
      // return res.status(200).json({ message: 'Token refreshed' })
    } catch (error) {
      return res.status(403).json({ message: 'Invalid Token.' });
    }
  }
};
