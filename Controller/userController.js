const authService = require('../Service/authService');
module.exports.signInUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    const result = await authService.signInUser();
    res.status(result.status).json(result);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ message: error.message, status: 500 });
  }
};
module.exports.signUpUser = async (req, res) => {
  try {
    let { email, password, name } = req.body;
    const result = await authService.signUpUser(email, password, name);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};
