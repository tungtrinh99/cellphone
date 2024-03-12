const jwt = require("jsonwebtoken")

const generateAccessToken = (email) => {
    const accessToken = jwt.sign(
        { email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d" }
    )
    return accessToken
}

const generateRefreshToken = (email) => {
    const refreshToken = jwt.sign(
        { email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
    )
    return refreshToken
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
}