const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()
const {routers} = require("./routers")
require("./config/passport_google")
require("./config/passport_facebook")

const app = express()
app.use(cors())
app.use(express.json())

routers(app)

app.listen(process.env.APP_PORT, () => {
    console.log(
        "REST API server ready at: " + process.env.APP_URL + ":" + process.env.APP_PORT
    )
})
