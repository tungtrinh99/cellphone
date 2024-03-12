module.exports = {
    OK: 200, // Mã thành công khi yêu cầu được xử lý thành công
    CREATED: 201, // Mã thành công khi tài nguyên đã được tạo thành công
    ACCEPTED: 202, // Mã thành công khi yêu cầu đã được chấp nhận nhưng chưa được xử lý hoàn toàn
    NO_CONTENT: 204, // Mã thành công khi không có dữ liệu phản hồi (thường cho các yêu cầu DELETE)
    BAD_REQUEST: 400, // Mã lỗi yêu cầu không hợp lệ
    UNAUTHORIZED: 401, // Mã lỗi khi chưa xác thực hoặc không có quyền truy cập
    FORBIDDEN: 403, // Mã lỗi khi có quyền truy cập nhưng bị từ chối
    NOT_FOUND: 404, // Mã lỗi khi tài nguyên không tồn tại
    METHOD_NOT_ALLOWED: 405, // Mã lỗi khi phương thức HTTP không được phép
    INTERNAL_SERVER_ERROR: 500, // Mã lỗi nội bộ trên máy chủ
    SERVICE_UNAVAILABLE: 503, // Mã lỗi khi dịch vụ không khả dụng
    GATEWAY_TIMEOUT: 504, // Mã lỗi khi cổng (gateway) không thể truy cập dịch vụ
}
