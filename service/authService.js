const User = require('../Schemas/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const configJWT = require('../utils/configJWT');
const { sendMailService } = require('../Service/emailService');

const authService = {
  signInUser: async (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
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
              const resut = {
                message: 'User login successfully',
                status: 200,
                data: {
                  access_token: accessToken,
                  refresh_token: refreshToken,
                  name: findUser?.name,
                  email: findUser?.email,
                },
              };
              resolve(resut);
            } else {
              const resut = {
                message: 'Invalid credentials',
                status: 404,
              };
              resolve(resut);
            }
          });
        } else {
          const resut = {
            message: 'User not found',
            status: 404,
          };
          resolve(resut);
        }
      } catch (error) {
        // return { message: error.message, status: 500 };
        reject(error);
      }
    });
  },
  signUpUser: async (email, password, name) => {
    return new Promise(async (resolve, reject) => {
      try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
          const result = {
            message: 'Email already registered',
            status: 404,
          };
          resolve(result);
        } else {
          const hashedPassword = await bcrypt.hash(password, 10);
          const users = new User({
            password: hashedPassword,
            email: email,
            name: name,
          });
          await users.save();
          await sendMailService(email, name);
          const result = {
            message: 'User registered successfully',
            status: 200,
          };
          resolve(result);
        }
      } catch (error) {
        // return { message: error.message, status: 500 };
        reject(error);
      }
    });
  },
};

module.exports = authService;
