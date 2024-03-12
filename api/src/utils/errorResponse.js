class HttpError {
    constructor(
        message = "Internal Server Error",
        statusCode = 500,
        data = null
    ) {
        this.message = message
        this.statusCode = statusCode
        this.data = data
    }

    static send(
        res,
        message = "Internal Server Error",
        statusCode = 500,
        data = null
    ) {
        const errorResponse = new HttpError(message, statusCode, data)
        res.status(statusCode).json(errorResponse)
    }
}

module.exports = HttpError
