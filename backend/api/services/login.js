require('dotenv').config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginVerifys = require('../controllers/loginVerifys');
const findUser = require('../models/login');

const { SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const matchPassword = (password, userPassword) => bcrypt.compare(password, userPassword);

module.exports = async (email, password) => {
  const verifys = loginVerifys(email, password);
  if (verifys) return verifys;

  const userDB = await findUser(email);

  if (userDB && await matchPassword(password, userDB.password)) {
    delete userDB.password;
    return jwt.sign({ data: userDB }, SECRET, jwtConfig);
  }
  
  return { status: 401, message: 'Incorrect username or password' };
};
