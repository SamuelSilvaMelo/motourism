const { emailExists, createUser } = require('../models/createUser');
const userVerifys = require('./userVerify');

module.exports = async (name, email, password) => {
  const verifys = userVerifys(name, email, password);
  if (verifys) return verifys;
  const thereIsEmailInDB = await emailExists(email);
  if (thereIsEmailInDB) {
    return { status: 409, message: 'Email already registered' };
  }
  return createUser(name, email, password);
};
