const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;
  //const authHeader = request.body.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: 'JWT is missing' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret);
    const { sub } = decoded;

    Object.assign(request.body, {
      userId: sub,
    });
    return next();
  } catch {
    return response.status(401).json({ message: 'Invalid JWT' });
  }
}

module.exports = ensureAuthenticated;
