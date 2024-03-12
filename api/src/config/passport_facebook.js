const passport = require("passport")
const FacebookStrategy = require("passport-facebook").Strategy
require("dotenv").config()
const { authController } = require("../controllers/auth.controller")

// passport.use(new FacebookStrategy({
//         clientID: process.env.FACEBOOK_APP_ID,
//         clientSecret: process.env.FACEBOOK_APP_SECRET,
//         callbackURL: process.env.FACEBOOK_CALLBACK_URL,
//     },
//     function(accessToken, refreshToken, profile, cb) {
//         console.log("profile", profile)
//         authController().saveUserFacebookToDatabase(accessToken, refreshToken, profile, cb)
//     },
// ))