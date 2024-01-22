const User = require('../Schemas/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const configJWT = require('../utils/configJWT');
const { sendMailService } = require('../service/emailService');

const userController = {
  signInUser: async (req, res) => {
    try {
      let { email, password } = req.body;
      const findUser = await User.findOne({ email: email });
      if (findUser) {
        bcrypt.compare(password, findUser?.password, (error, result) => {
          if (result) {
            const accessToken = jwt.sign(
              { email: email },
              configJWT.jwtSecret,
              {
                expiresIn: configJWT.jwtExpiresIn,
              }
            );
            const refreshToken = jwt.sign(
              { email: email },
              configJWT.jwtSecret,
              {
                expiresIn: configJWT.refExpiresIn,
              }
            );
            res.status(200).json({
              message: 'User login successfully',
              status: 200,
              data: {
                access_token: accessToken,
                refresh_token: refreshToken,
                name: findUser?.name,
                email: findUser?.email,
              },
            });
          } else {
            res.status(404).json({
              message: 'Invalid credentials',
              status: 404,
            });
          }
        });
      } else {
        res.status(404).json({
          message: 'User not found',
          status: 404,
        });
      }
    } catch (error) {
      res.status(500).json({ message: error, status: 500 });
    }
  },
  signUpUser: async (req, res) => {
    try {
      let { email, password, name } = req.body;
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        res.status(404).json({
          message: 'Email already registered',
          status: 404,
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const users = new User({
          password: hashedPassword,
          email: email,
          name: name,
        });
        await users.save();
        await sendMailService(email, name);
        res.status(200).json({
          message: 'User registered successfully',
          status: 200,
        });
      }
    } catch (error) {
      res.status(500).json({ message: error, status: 500 });
    }
  },
};

module.exports = userController;
