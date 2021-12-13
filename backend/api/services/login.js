const jwt = require('jsonwebtoken');
const loginVerifys = require('../controllers/loginVerifys');
const findUser = require('../models/login');

const secret = 'mypass';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async (email, password) => {
  console.log(0);
  const verifys = loginVerifys(email, password);
  if (verifys) return verifys;

  const userDB = await findUser(email);

  if (userDB && userDB.password === password) return jwt.sign({ data: userDB }, secret, jwtConfig);
  
  return { status: 401, message: 'Incorrect username or password' };
};
