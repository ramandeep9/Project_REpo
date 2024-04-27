const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env.JWT_SECRET;

const generateToken = (userId) =>
 {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
};
// const generateRandomToken = () => {
//   // Generate a random string using crypto module or any other method
//   // For example, using crypto-random-string module:
//   const cryptoRandomString = require('crypto-random-string');
//   return cryptoRandomString({ length: 20, type: 'url-safe' }); // Generates a 20-character URL-safe string
// };
module.exports = generateToken;
