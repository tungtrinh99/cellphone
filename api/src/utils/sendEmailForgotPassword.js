const sendingMail = require("../config/mail")

module.exports = async ({ email, userName, userId, token }) => {
    try {
        sendingMail({
            from: process.env.MAIL_FROM_ADDRESS,
            to: `${email}`,
            subject: "Account Verification Link",
            text: `Hello, ${userName} Please verify your email by
                  clicking this link :
                  ${process.env.APP_URL_FRONTEND}/reset-password/${userId}/${token}`,
        })
    } catch (error) {
        console.log(error)
    }
}
