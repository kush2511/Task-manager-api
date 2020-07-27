const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "learncoding813@gmail.com",
        subject: "Welcome " + name,
        html: '<strong>Welcome ' + name + '!</strong>',
        text: "Your email with " + email + "is registered successfully",
    })
}
const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "learncoding813@gmail.com",
        subject: "GoodBye!",
        text: "Your  account with email " + email + " and name " + name + " is deleted successfully",
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}