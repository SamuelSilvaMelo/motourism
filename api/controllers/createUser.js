const createUser = require('../services/createUser');
const userVerifys = require('./userVerify');

module.exports = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userCreated = await createUser(name, email, password);
    if (!userCreated.message) return res.status(201).json(userCreated);
    await userVerifys(res, userCreated);
  } catch (error) {
    res.status(500).json({ message: 'Problema ao cadastrar' });
  }
};
