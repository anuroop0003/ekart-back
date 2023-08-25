const User = require("../Schemas/userSchema");
const nodemailer = require("nodemailer");

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users).status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    let { email, password, photoURL, name } = req.body;
    if (!photoURL) {
      photoURL = `https://ui-avatars.com/api/?name=${email.split("@")[0]}&background=000&color=F8C44C&rounded=true&bold=true`;
    }
    const findUser = await User.findOne({ password: password, email: email });
    if (!findUser) {
      const users = new User({ password: password, email: email, photoURL: photoURL, name: name });
      await users.save();
    }
    res.status(200).json({ message: "User fetched successfully", photoURL: photoURL, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};

exports.sendPasswordMail = async (req, res) => {
  try {
    const tempPassword = Math.random().toString(36).slice(-10);
    const users = new User({ password: tempPassword });
    await users.save();
    let { email } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: "iamciitester@gmail.com",
        pass: "lwprgkappfiwaykb",
      },
    });
    const mailOptions = {
      from: "iamciitester@gmail.com",
      to: email,
      subject: "Hello from Express.js",
      html: `  <body style="color: rgb(0, 0, 0); font-family: monospace; margin: 5%">
      <h1 style="text-align: center; margin: '50px 0'; font-size: 30px;white-space: nowrap">Password Reset</h1>
      <p style="font-size: 20px; margin: 20px; margin-top: 30px">Hello User,</p>
      <p style="font-size: 20px; margin: 20px">Your new password is: <strong>${tempPassword}</strong>.</p>
      <p style="font-size: 20px; margin: 20px">Please log in using your new password and consider changing it after logging in.</p>
      <p style="font-size: 20px; margin: 20px">If you did not request this password reset, please ignore this email.</p>
      <p style="font-size: 20px; margin: 20px">Best regards,<br />EKART Team</p>
    </body>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ message: "Email not sent successfully", status: 500 });
      } else {
        res.status(200).json({ message: "Email sent successfully", status: 200 });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Email not sent successfully", status: 500 });
  }
};
