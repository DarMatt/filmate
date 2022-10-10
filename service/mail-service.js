const nodemailer = require('nodemailer');
const config = require('config');

class MailService {
  
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.get('smtpHost'),
      port: config.get('smtpPort'),
      secure: false,
      auth: {
        user: config.get('smtpUser'),
        pass: config.get('smpPassword')
      }
    })
  }

  async sendActivationMail(to, code) {
    console.log('im her')
    await this.transporter.sendMail({
      from: config.get('smtpUser'),
      to,
      subject: 'Account activation for ' + config.get('apiUrl'),
      text: '',
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <style>
      @media only screen and (max-width: 620px) {
        h1 {
          font-size: 20px;
          padding: 5px;
        }
      }
      </style>
        </head>
          <body>
            <div>
              <div style="max-width: 620px; margin: 0 auto; font-family: sans-serif;">
                <h1 style="padding: 10px; text-align: center; color:#606060;">We are delighted to welcome you to our team!</h1>
                <h2 style="padding: 10px; text-align: center; color:#606060;">Please Verify Your Email To Continue. Your verification code is:</h2>
                <p style="width: 80px; color:#606060; paddingBottom: 40px; margin: 0 auto; font-weight: bold; color: #202128; text-align: center; border-radius: 5px; color: #00b2ff; font-size: 45px;">${code}</p>
                <p style="color:#606060; padding-left: 20px;">To open our site click here: <a style="color: #00b2ff; textDecoration: underline;" href="https://film-mate.herokuapp.com">film-mate</p>
                <p style="color:#606060; padding-left: 20px;">If you have any questions, send us an email: <a style="color: #00b2ff; textDecoration: underline;" href="mailto:filmmateservice@gmail.com">filmmateservice@gmail.com</p>
                <p style="color:#606060; padding-left: 20px;">We're glad you're here!</p>
                <p style="color:#606060; padding-left: 20px;">The Film-mate team</p>
              </div>
            </div>
          </body>
      </html>
      `
    })
  }
}

module.exports = new MailService();