const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const { authController } = require("../controllers/auth.controller")
require("dotenv").config()

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             callbackURL: process.env.GOOGLE_CALLBACK_URL,
//         },
//         (accessToken, refreshToken, profile, cb) => {
//             authController().saveUserGoogleToDatabase(accessToken, refreshToken, profile, cb)
//         },
//     ),
// )
