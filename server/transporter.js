const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 587,
  secure: false,
  tls: {
    rejectUnauthorized: true,
    minVersion: "TLSv1.2",
  },
  auth: {
    user: "abrhammen12@gmail.com",
    pass: process.env.APP_SECRET,
  },
});

let mailOptions = {
  from: "abrhammen12@gmail.com",
  to: "abrhammen14@gmail.com",
  subject: "Job Offer from personal portfolio",
};

exports.transporter = transporter;
exports.mailOptions = mailOptions;
