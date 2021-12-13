const getAllItineraries = require('../services/getAllItineraries');

module.exports = async (req, res) => {
  const getItineraries = await getAllItineraries();
  return res.status(200).json(getItineraries);
};
