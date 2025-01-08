const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  auth: {
    user: process.env.EMAIL_USER, // Use Environment Variable
    pass: process.env.EMAIL_PASS, // Use Environment Variable
  },
});

const sendMail = async (sub, msg) => {
  try {
    transporter.sendMail({
      to: "hurairashahid0@gmail.com",
      subject: sub,
      html: msg,
    });

    console.log("Email Sent");
  } catch (error) {
    console.log("sending mail error");
  }
};

const sendTokenMail = async (sub, msg, reciever) => {
  try {
    const info = await transporter.sendMail({
      to: reciever,
      subject: sub,
      html: msg,
    });

    console.log("Email Sent Successfully:", info.messageId);  // Log the sent email's message ID
  } catch (error) {
    console.error("Error sending email:", error);  // Log detailed error
    if (error.response) {
      console.error("SMTP Response Error:", error.response.body);  // If available, log the SMTP response
    }
  }
};


module.exports = sendMail;
module.exports = sendTokenMail;

