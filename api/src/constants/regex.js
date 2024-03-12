const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const passwordRegex = /^[0-9a-zA-Z*.!@$%^&(){}[\]:;<>,.?~_+-=|]{8,32}$/
const usernameRegex = /^[A-Za-z0-9]+$/

module.exports = {
    emailRegex,
    passwordRegex,
    usernameRegex,
}