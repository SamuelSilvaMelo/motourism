const getAllMotorhomes = require('../models/getAllMotorhomes');

module.exports = async () => {
  const getMotorhomes = await getAllMotorhomes();
  return getMotorhomes;
};
