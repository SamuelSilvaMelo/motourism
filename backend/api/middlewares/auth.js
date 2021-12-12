const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET } = process.env;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const decoded = jwt.verify(authorization, SECRET);
    req.user = decoded.data;
    next();
  } catch (err) {
    return res.status(500).json({ message: 'erro ao decodificar' });
  }
};
