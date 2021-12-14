const bcrypt = require('bcrypt');
const connection = require('./connection');

const SALT_ROUNDS = 10;

const emailExists = async (email) => {
  const db = await connection();
  return db.collection('users').findOne({ email });
};

const createUser = async (name, email, password) => {
  const db = await connection();

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const { insertedId: _id } = await db.collection('users').insertOne({
    name, email, password: hashedPassword,
  });
  return { user: { name, email, role: 'user', _id } };
};

module.exports = { emailExists, createUser };
