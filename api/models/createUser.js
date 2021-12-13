const connection = require('./connection');

const emailExists = async (email) => {
  const db = await connection();
  return db.collection('users').findOne({ email });
};

const createUser = async (name, email, password) => {
  const db = await connection();
  const { insertedId: _id } = await db.collection('users').insertOne({
    name, email, password,
  });
  return { user: { name, email, role: 'user', _id } };
};

module.exports = { emailExists, createUser };
