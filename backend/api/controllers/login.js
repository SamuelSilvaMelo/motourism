const login = require('../services/login');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const data = await login(email, password);
  
  if (data.message) {
    const { status, message } = data;
    return res.status(status).json({ message });
  }

  return res.status(200).json({ token: data });
};
