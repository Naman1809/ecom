const nodeMailer = require("nodemailer");

const sendEmail = async (options) =>{
    var transporter = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "8fdf45734cd886",
          pass: "f3f81a451f9d43"
        }
      });


    const mailOptions = {
        from:"process.env.SMPT_MAIL",
        to:options.email,
        subject:options.subject,
        text: options.message
    };
    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;