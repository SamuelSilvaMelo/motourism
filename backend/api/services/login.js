require('dotenv').config();

const jwt = require('jsonwebtoken');
const loginVerifys = require('../controllers/loginVerifys');
const findUser = require('../models/login');

const { SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async (email, password) => {
  console.log(0);
  const verifys = loginVerifys(email, password);
  if (verifys) return verifys;

  const userDB = await findUser(email);

  if (userDB && userDB.password === password) {
    delete userDB.password;
    return jwt.sign({ data: userDB }, SECRET, jwtConfig);
  }
  
  return { status: 401, message: 'Incorrect username or password' };
};
