const jwt = require('jsonwebtoken');

const secret = 'mypass';

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const decoded = jwt.verify(authorization, secret);
    req.user = decoded.data;
    next();
  } catch (err) {
    return res.status(500).json({ message: 'erro ao decodificar' });
  }
};
