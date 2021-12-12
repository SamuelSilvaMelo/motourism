module.exports = async (res, userCreated) => {
  const { status, message } = userCreated;
  return res.status(status).json({ message });
};
