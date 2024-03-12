require("dotenv").config()

const username = process.env.DB_USER || "user",
password = process.env.DB_PASSWORD || "123456",
database = process.env.DB_DATABASE || "example",
host = process.env.DB_HOST || "mysql-db"

module.exports = {
    development: {
        username: username,
        password: password,
        database: database,
        host: host,
        dialect: "mysql",
        define: {
            charset: "utf8mb4",
            dialectOptions: {
                collate: "utf8mb4_general_ci",
            },
            timestamps: true,
            underscored: true,
            freezeTableName: true,
        },
    },
}
