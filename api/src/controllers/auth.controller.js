const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const { validationResult } = require("express-validator")
const { Users, sequelize } = require("../models")
const { messages } = require("../constants/message")
const HttpError = require("../utils/errorResponse")
const HttpSuccess = require("../utils/successResponse")
const HttpStatus = require("../constants/httpStatus")
const {
    generateAccessToken,
    generateRefreshToken,
} = require("../utils/generateToken")
const sendingMailVerify = require("../utils/sendEmailVerify")
const sendingMailForgotPassword = require("../utils/sendEmailForgotPassword")
const passport = require("passport")
require("dotenv").config()

exports.authController = () => {
    const signUp = async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            })
        }

        const { email, password, username, firstName, lastName } = req.body

        try {
            const account = await Users.findOne({ where: { email } })
            if (account) {
                HttpError.send(
                    res,
                    messages.signup.userExist,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }
            const saltRounds = bcrypt.genSaltSync(10)
            const passwordHash = bcrypt.hashSync(password, saltRounds)
            const body = {
                email: email,
                password_hash: passwordHash,
                user_name: username,
                first_name: firstName,
                last_name: lastName,
            }
            let user = await Users.create(body)
            user = {
                id: user.id,
                email: user.email,
                username: user.user_name,
                firstName: user.first_name,
                lastName: user.last_name,
            }
            sendingMailVerify({
                email: user.email,
                userName: user.username,
                userId: user.id,
                token: generateAccessToken(user.email),
            })
            HttpSuccess.send(
                res,
                {
                    message: messages.signup.success,
                    statusCode: HttpStatus.CREATED,
                    data: user
                }
            )
        } catch (error) {
            console.error(error)
            HttpError.send(
                res,
                messages.signup.error,
                HttpStatus.INTERNAL_SERVER_ERROR,
                null,
            )
        }
    }
    const signIn = async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            })
        }
        try {
            const { email, password } = req.body
            const user = await Users.findOne({ where: { email } })
            if (!user) {
                HttpError.send(
                    res,
                    messages.login.notExist,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }
            const isMatch = bcrypt.compareSync(password, user.password_hash)
            if (!isMatch) {
                HttpError.send(
                    res,
                    messages.login.passwordIncorrect,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }
            const accessToken = generateAccessToken(email)
            const refreshToken = generateRefreshToken(email)

            HttpSuccess.send(
                res,
                {
                    message: messages.login.success,
                    statusCode: HttpStatus.OK,
                    data: {
                        id: user.id,
                        email: user.email,
                        username: user.user_name,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        accessToken,
                        refreshToken,
                    }

                })
        } catch (error) {
            console.error(error)
            HttpError.send(
                res,
                messages.login.error,
                HttpStatus.INTERNAL_SERVER_ERROR,
                null,
            )
        }
    }
    const refreshToken = async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            })
        }
        try {
            const { refreshToken } = req.body
            const decoded = jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET,
            )
            const accessToken = generateAccessToken(decoded.email)
            const newRefreshToken = generateRefreshToken(decoded.email)
            HttpSuccess.send(
                res,
                {
                    message: messages.refreshToken.success,
                    statusCode: HttpStatus.OK,
                    data: {
                        accessToken,
                        refreshToken: newRefreshToken,
                    }
                }
            )
        } catch (error) {
            console.error(error)
            HttpError.send(
                res,
                messages.refreshToken.error,
                HttpStatus.INTERNAL_SERVER_ERROR,
                null,
            )
        }
    }
    const verifyEmail = async (req, res) => {
        try {
            const { id, token } = req.params
            const user = await Users.findOne({ where: { id } })
            if (!user) {
                HttpError.send(
                    res,
                    messages.verifyEmail.userNotExist,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }
            if (user.email_verified_at) {
                HttpError.send(
                    res,
                    messages.verifyEmail.emailVerified,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            if (decoded.email !== user.email) {
                HttpError.send(
                    res,
                    messages.verifyEmail.error,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }
            await Users.update({ email_verified_at: sequelize.literal("CURRENT_TIMESTAMP") }, { where: { id } })
            HttpSuccess.send(res, {
                message: messages.verifyEmail.success,
                statusCode: HttpStatus.OK,
            })
        } catch (error) {
            HttpError.send(
                res,
                messages.verifyEmail.error,
                HttpStatus.INTERNAL_SERVER_ERROR,
                null,
            )
        }
    }
    const forgotPassword = async (req, res) => {
        try {
            const { email } = req.body
            const user = await Users.findOne({ where: { email } })
            if (!user) {
                HttpError.send(
                    res,
                    messages.forgotPassword.userNotExist,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }

            if (!user.email_verified_at) {
                HttpError.send(
                    res,
                    messages.forgotPassword.emailNotVerified,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }

            sendingMailForgotPassword({
                email,
                userName: user.user_name,
                userId: user.id,
                token: generateAccessToken(user.email),
            })
            HttpSuccess.send(
                res,
                {
                    message: messages.veriforgotPasswordfyEmail.success,
                    statusCode: HttpStatus.OK,
                }
            )
        } catch (error) {
            console.error(error)
            HttpError.send(
                res,
                messages.forgotPassword.error,
                HttpStatus.INTERNAL_SERVER_ERROR,
                null,
            )
        }
    }
    const resetPassword = async (req, res) => {
        try {
            const { id, token } = req.params
            const { password } = req.body
            const user = await Users.findOne({ where: { id } })
            if (!user) {
                HttpError.send(
                    res,
                    messages.forgotPassword.userNotExist,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            if (decoded.email !== user.email) {
                HttpError.send(
                    res,
                    messages.forgotPassword.error,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }
            const saltRounds = bcrypt.genSaltSync(10)
            const passwordHash = bcrypt.hashSync(password, saltRounds)
            await Users.update({ password_hash: passwordHash }, { where: { id } })
            HttpSuccess.send(res, {
                message: messages.resetPassword.success,
                statusCode: HttpStatus.OK,
            })
        } catch (error) {
            console.error(error)
            HttpError.send(
                res,
                messages.forgotPassword.error,
                HttpStatus.INTERNAL_SERVER_ERROR,
                null,
            )
        }
    }
    const changePassword = async (req, res) => {
        try {
            const { curentPassword, newPassword } = req.body
            const authorization = req.headers.authorization.split(" ")
            const accessToken = authorization[1]
            const decoded = jwt.verify(
                accessToken,
                process.env.ACCESS_TOKEN_SECRET,
            )
            const user = await Users.findOne({ where: { email: decoded.email } })
            if (!user) {
                HttpError.send(
                    res,
                    messages.forgotPassword.userNotExist,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }
            const isMatch = bcrypt.compareSync(
                curentPassword,
                user.password_hash,
            )
            if (!isMatch) {
                HttpError.send(
                    res,
                    messages.login.passwordIncorrect,
                    HttpStatus.BAD_REQUEST,
                    null,
                )
                return
            }
            const saltRounds = bcrypt.genSaltSync(10)
            const passwordHash = bcrypt.hashSync(newPassword, saltRounds)
            await Users.update({ password_hash: passwordHash }, { where: { id: user.id } })
            HttpSuccess.send(res, {
                message: messages.changePassword.success,
                statusCode: HttpStatus.OK,
            })
        } catch (error) {
            console.error(error)
            HttpError.send(
                res,
                messages.forgotPassword.error,
                HttpStatus.INTERNAL_SERVER_ERROR,
                null,
            )
        }
    }

    const saveUserGoogleToDatabase = async (accessToken, refreshToken, profile, cb) => {
        try {
            const user = await Users.findOne({ where: { email: profile.emails[0].value } })
            if (user) {
                return cb(null, user)
            }
            const newUser = await Users.create({
                google_id: profile.id,
                email: profile.emails[0]?.value,
                user_name: profile?.displayName,
                email_verified_at: profile.emails[0]?.verified ? sequelize.literal("CURRENT_TIMESTAMP") : null,
                first_name: profile.name?.familyName,
                last_name: profile.name?.givenName,
            })
            return cb(null, newUser)
        } catch (error) {
            return cb(error, null)
        }
    }

    const saveUserFacebookToDatabase = async (accessToken, refreshToken, profile, cb) => {
        // try {
        //     const user = await Users.findOne({ where: { email: profile.emails[0].value } })
        //     if (user) {
        //         return cb(null, user)
        //     }
        //     const newUser = await Users.create({
        //         facebook_id: profile.id,
        //         email: profile.emails[0]?.value,
        //         user_name: profile?.displayName,
        //         email_verified_at: profile.emails[0]?.verified ? sequelize.literal("CURRENT_TIMESTAMP") : null,
        //         first_name: profile.name?.familyName,
        //         last_name: profile.name?.givenName,
        //     })
        //     return cb(null, newUser)
        // } catch (error) {
        //     return cb(error, null)
        // }
        console.log(profile)
        return cb(null, profile)
    }

    const googleAuthCallback = (req, res, next) => {
        passport.authenticate("google", (err, profile) => {
            if (err) {
                next(err)
            }
            req.user = profile
            next()
        })(req, res, next)
    }


    const googleAuthCallbackSuccess = (req, res) => {
        res.redirect(`${process.env.APP_URL_FRONTEND}/login-success/${req.user?.id}`)
    }

    const facebookAuthCallback = (req, res, next) => {
        passport.authenticate("facebook", (err, profile) => {
            if (err) {
                next(err)
            }
            req.user = profile
            next()
        })(req, res, next)
    }


    const facebookAuthCallbackSuccess = (req, res) => {
        res.redirect(`${process.env.APP_URL_FRONTEND}/login-success/${req.user?.id}`)
    }

    return {
        signUp,
        signIn,
        refreshToken,
        verifyEmail,
        forgotPassword,
        resetPassword,
        changePassword,
        saveUserGoogleToDatabase,
        saveUserFacebookToDatabase,
        googleAuthCallback,
        googleAuthCallbackSuccess,
        facebookAuthCallback,
        facebookAuthCallbackSuccess,
    }
}
