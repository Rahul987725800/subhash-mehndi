import nodemailer from 'nodemailer';
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(
  smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'guptarahul70322@gmail.com',
      pass: 'mca@jnu100',
    },
  })
);
export default async (req, res) => {
  if (req.method === 'GET') {
    // from did'nt worked
    const mailOptions = {
      to: 'virendergupta70322@gmail.com', // list of receivers comma separated
      subject: 'Hello ✔', // Subject line
      // text: 'Hello world?', // plain text body
      html: '<h1>Hii bro</h1>', // html body
    };
    const info = await transporter.sendMail(mailOptions);
    res.json({
      message: 'sent sample mail',
      info,
    });
  } else if (req.method === 'POST') {
    // console.log(req.body);

    const mailOptions = {
      to: 'virendergupta70322@gmail.com, guptarahul70322@gmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      // text: 'Hello world?', // plain text body
      html: `
      <h3>Name: ${req.body.name}</h3>
      <h3>Phone:  <a href="tel: ${req.body.phone}">
      ${req.body.phone}
      </a></h3>
      <h3>Message: ${req.body.message}</h3>
      `, // html body
    };
    const info = await transporter.sendMail(mailOptions);
    res.json({
      message: 'sent email',
      info,
    });
  }
};
