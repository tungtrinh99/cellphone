class HttpSuccess {
    constructor(data = null, message = "Successfully") {
        this.success = true
        this.data = data
        this.message = message
    }

    static send(res, { message = "Successfully", statusCode = 200, data = null }) {
        const successResponse = new HttpSuccess(data, message)
        res.status(statusCode).json(successResponse)
    }
}

module.exports = HttpSuccess
