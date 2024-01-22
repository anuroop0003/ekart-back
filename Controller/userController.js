import { signInUser, signUpUser } from '../service/authService';
const _signInUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    const result = await signInUser(email, password);
    res.status(result.status).json(result);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ message: error.message, status: 500 });
  }
};
export { _signInUser as signInUser };
const _signUpUser = async (req, res) => {
  try {
    let { email, password, name } = req.body;
    const result = await signUpUser(email, password, name);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};
export { _signUpUser as signUpUser };
