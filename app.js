const express = require("express");
const cors = require("cors");
const sendGridTransporter = require("nodemailer-sendgrid-transport");
const { transporter, mailOptions } = require("./transporter");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 1414;

app.use(cors());
app.use(express.json());

app.use("/test", (req, res) => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send(`email send `);
    }
  });
});

let date = new Date().toLocaleString({ timeZone: "Nairobi, Kenya" });

app.post("/sendemail", (req, res) => {
  const { name, email, jobType, message } = req.body;
  mailOptions.html = `<h3>Detail Information</h3>
  <ul>
  <li>Name: ${name}</li>
  <li>Email: ${email}</li>
  <li>Job Type: ${jobType}</li>
  <li>Message: ${message}</li>
  <li>Date: ${date}</li>
  </ul>
  `;
  if (!name || !email || !jobType || !message) {
    res.json({ message: `please fill all the information in the form` });
  } else {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log("Email sent: " + info.response);
        res.json({ message: `email send ` });
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
