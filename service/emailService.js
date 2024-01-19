const nodemailer = require('nodemailer')

module.exports.sendMailService = async (email, name) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: 'iamciitester@gmail.com',
            pass: 'lwprgkappfiwaykb',
        },
    })
    const mailOptions = {
        from: 'iamciitester@gmail.com',
        to: email,
        subject: `Hello ${name},`,
        html: `<body style="color: rgb(0, 0, 0); font-family: monospace; margin: 5%">
        <p style="font-size: 20px; margin: 20px">Thank you for registering on our App.</p>
        <p style="font-size: 20px; margin: 20px">We hope you enjoy your experience!.</p>
        <p style="font-size: 20px; margin: 20px">Best regards,<br />E Commerce Team</p>
      </body>`,
    }
    transporter
        .sendMail(mailOptions)
        .then((res) => {
            console.log('Mail send successfully')
        })
        .catch((error) => {
            console.log('Mail send unsuccessfully')
        })
}

// exports.sendMailService = async (req, res) => {
//     try {
//       const tempPassword = Math.random().toString(36).slice(-10);
//       const users = new User({ password: tempPassword });
//       await users.save();
//       let { email } = req.body;
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         secure: false,
//         auth: {
//           user: "iamciitester@gmail.com",
//           pass: "lwprgkappfiwaykb",
//         },
//       });
//       const mailOptions = {
//         from: "iamciitester@gmail.com",
//         to: email,
//         subject: "Hello from Express.js",
//         html: `  <body style="color: rgb(0, 0, 0); font-family: monospace; margin: 5%">
//         <h1 style="text-align: center; margin: '50px 0'; font-size: 30px;white-space: nowrap">Password Reset</h1>
//         <p style="font-size: 20px; margin: 20px; margin-top: 30px">Hello User,</p>
//         <p style="font-size: 20px; margin: 20px">Your new password is: <strong>${tempPassword}</strong>.</p>
//         <p style="font-size: 20px; margin: 20px">Please log in using your new password and consider changing it after logging in.</p>
//         <p style="font-size: 20px; margin: 20px">If you did not request this password reset, please ignore this email.</p>
//         <p style="font-size: 20px; margin: 20px">Best regards,<br />EKART Team</p>
//       </body>`,
//       };
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           res
//             .status(500)
//             .json({ message: "Email not sent successfully", status: 500 });
//         } else {
//           res
//             .status(200)
//             .json({ message: "Email sent successfully", status: 200 });
//         }
//       });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Email not sent successfully", status: 500 });
//     }
//   };
