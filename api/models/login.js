const connection = require('./connection');

module.exports = async (email) => {
  const db = await connection();
  const userData = await db.collection('users').findOne({ email });
  return userData;
};
