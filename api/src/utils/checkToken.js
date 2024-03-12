const jwt = require("jsonwebtoken")

const checkToken = (req, res, next) => {
    if (req.headers.authorization) {
        try {
            const authorization = req.headers.authorization.split(" ")
            if (authorization[0] !== "Bearer") {
                return res.status(401).json({ error: "Không tìm thấy token." })
            }
            const accessToken = authorization[1]
            jwt.verify(
                accessToken,
                process.env.ACCESS_TOKEN_SECRET
            )
            return next()
        } catch (e) {
            return res.status(401).json({ error: "Forbidden: " + e.message })
        }
    } else {
        return res.status(401).json({ error: "Không tìm thấy token." })
    }
}

module.exports = {
    checkToken,
}
