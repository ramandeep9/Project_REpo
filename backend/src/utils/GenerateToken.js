const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const generateToken = (userId) =>
 {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
};

module.exports = generateToken;
