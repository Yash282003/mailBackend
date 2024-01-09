const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const { EMAIL, PASSWORD } = require("../env.js");
const generateOTP = require("./generateOTP.js");



const sendOTP = (req, res) => {
  const { userEmail } = req.body;
  console.log("userEmail:", userEmail);
  const otp = generateOTP();

  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: "Place Order",
    text: `Your otp is ${otp}`,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "You should receive an email with the OTP.",
      });
    })
    .catch((error) => {
      console.error("Error sending OTP:", error);
      return res.status(500).json({ error: "Internal server error" });
    });
};


module.exports = { sendOTP };
