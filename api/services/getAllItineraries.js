const getAllItineraries = require('../models/getAllItineraries');

module.exports = async () => {
  const getItineraries = await getAllItineraries();
  return getItineraries;
};
