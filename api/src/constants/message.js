const messages = {
    validation: {
        auth: {
            email: {
                required: "Email không được để trống.",
                invalid: "Email không hợp lệ.",
            },
            password: {
                required: "Mật khẩu không được để trống.",
                invalid: "Mật khẩu không hợp lệ.",
                length: "Mật khẩu phải có ít nhất 8 ký tự.",
            },
            firstName: {
                required: "Họ không được để trống.",
                invalid: "Họ phải là chuỗi.",
            },
            lastName: {
                required: "Tên không được để trống.",
                invalid: "Tên phải là chuỗi.",
            },
            username: {
                required: "Username không được để trống.",
                invalid: "Username không hợp lệ.",
            },
            refreshToken: {
                required: "Refresh token không được để trống.",
                invalid: "Refresh token không hợp lệ.",
            }
        },
        common: {
            isString: "Vui lòng nhập vào 1 chuỗi",
            isNumber: "Vui lòng nhập vào 1 số",
            isBoolean: "Vui lòng nhập vào true hoặc false",
            isEmptyString: "Vui lòng không được để trống"
        }
    },
    login: {
        success: "Đăng nhập thành công.",
        error: "Tài khoản hoặc mật khẩu không đúng.",
        notExist: "Tài khoản không tồn tại.",
        passwordIncorrect: "Mật khẩu không đúng.",
    },
    signup: {
        success: "Đăng ký thành công.",
        error: "Đã có lỗi xảy ra trong quá trình đăng ký.",
        userExist: "Tài khoản đã tồn tại.",
    },
    refreshToken: {
        success: "Lấy token thành công.",
        error: "Đã có lỗi xảy ra.",
    },
    verifyEmail: {
        success: "Xác thực email thành công.",
        error: "Đã có lỗi xảy ra.",
        userNotExist: "Tài khoản không tồn tại.",
        emailVerified: "Email đã được xác thực.",
    },
    forgotPassword: {
        success: "Đã gửi email đặt lại mật khẩu.",
        error: "Đã có lỗi xảy ra.",
        userNotExist: "Tài khoản không tồn tại.",
        emailNotVerified: "Email chưa được xác thực.",
    },
    resetPassword: {
        success: "Đặt lại mật khẩu thành công.",
        error: "Đã có lỗi xảy ra.",
        userNotExist: "Tài khoản không tồn tại.",
        emailNotVerified: "Email chưa được xác thực.",
    },
    changePassword: {
        success: "Đổi mật khẩu thành công.",
        error: "Đã có lỗi xảy ra.",
        userNotExist: "Tài khoản không tồn tại.",
        emailNotVerified: "Email chưa được xác thực.",
    },
    product: {
        notFound: "Không tìm thấy sản phẩm."
    }
}

module.exports = {
    messages
}