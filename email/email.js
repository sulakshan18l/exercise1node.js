var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sulakshan.loganathan@gmail.com',
    pass: 'sololathu'
  }
});

var mailOptions = {
  from: 'sulakshan.loganathan@gmail.com',
  to: 'info@uki.life',
  subject: 'testing my nodemailer module',
  text: 'This is easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
