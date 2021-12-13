module.exports = (_err, _req, res, _next) => {
  res.status(500).json({ message: 'Something went wrong, please try again later.' });
};
