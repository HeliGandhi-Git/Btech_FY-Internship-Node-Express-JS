const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sendmail', (req, res) => {
  res.send('Mail sent!')
})



const nodemailer = require("nodemailer");

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false ,// Use true for port 465, false for port 587
  auth: {
    user: "heligandhi4114@gmail.com",
    pass: "ksqm udrs jzde bjfm",
  },
});

// Send an email using async/await
(async () => {
  const info = await transporter.sendMail({
    from: '"heli gandhi" <heligandhi4114@gmail.com>',
    to: "mannprajapati2502@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // Plain-text version of the message
    html: "<b>Hello world?</b>", // HTML version of the message
  });

  console.log("Message sent:", info.messageId);
})();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("Server started on http://127.0.0.1:3000")