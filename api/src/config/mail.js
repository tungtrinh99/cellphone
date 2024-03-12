const nodemailer = require("nodemailer")

module.exports = async ({ from, to, subject, text }) => {
    try {
        let mailOptions = {
            from,
            to,
            subject,
            text,
        }
        const Transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_FROM_ADDRESS,
                pass: process.env.MAIL_APP_PASSWORD,
            },
        })
        return await Transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(error)
    }
}
