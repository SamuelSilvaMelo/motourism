const getAllMotorhomes = require('../services/getAllMotorhomes');

module.exports = async (req, res) => {
  const getMotorhomes = await getAllMotorhomes();
  return res.status(200).json(getMotorhomes);
};
