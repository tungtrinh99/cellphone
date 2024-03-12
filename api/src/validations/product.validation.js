const { query, body } = require("express-validator")
const { messages } = require("../constants/message")

const validateProductGetRequest = [
    // query("text_search")
    //     .optional()
    //     .isString()
    //     .withMessage(messages.validation.common.isString),
    // query("limit")
    //     .optional()
    //     .isInt({
    //         min: 0,
    //     })
    //     .withMessage(messages.validation.common.isNumber),
    // query("offset")
    //     .optional()
    //     .isInt({
    //         min: 0,
    //     })
    //     .withMessage(messages.validation.common.isNumber),
]

const validateProductCreateRequest = [
    body("product_name")
        .exists({checkFalsy: true})
        .withMessage(messages.validation.common.isEmptyString)
        .isString()
        .withMessage(messages.validation.common.isString),
    body("brand_name")
        .exists({checkFalsy: true})
        .withMessage(messages.validation.common.isEmptyString)
        .isString()
        .withMessage(messages.validation.common.isString),
    body("original_price")
        .exists({checkFalsy: true})
        .withMessage(messages.validation.common.isEmptyString)
        .isInt({
            min: 1,
        })
        .withMessage(messages.validation.common.isNumber),
    body("discount_percent")
        .isFloat({
            min: 1,
        })
        .withMessage(messages.validation.common.isNumber),
    body("condition")
        .exists({checkFalsy: true})
        .withMessage(messages.validation.common.isEmptyString)
        .isString()
        .withMessage(messages.validation.common.isString),
    body("description")
        .isString()
        .withMessage(messages.validation.common.isString),
    body("product_image_url")
        .exists({checkFalsy: true})
        .withMessage(messages.validation.common.isEmptyString)
        .isString()
        .withMessage(messages.validation.common.isString),
    body("stock_quantity")
        .exists({checkFalsy: true})
        .withMessage(messages.validation.common.isEmptyString)
        .isInt({
            min: 1,
        })
        .withMessage(messages.validation.common.isNumber),
]

const validateProductUpdateRequest = [
    body("product_name")
        .optional()
        .isString()
        .withMessage(messages.validation.common.isString),
    body("brand_name")
        .optional()
        .isString()
        .withMessage(messages.validation.common.isString),
    body("original_price")
        .optional()
        .isInt({
            min: 1,
        })
        .withMessage(messages.validation.common.isNumber),
    body("discount_percent")
        .optional()
        .isFloat({
            min: 1,
        })
        .withMessage(messages.validation.common.isNumber),
    body("condition")
        .optional()
        .isString()
        .withMessage(messages.validation.common.isString),
    body("description")
        .optional()
        .isString()
        .withMessage(messages.validation.common.isString),
    body("product_image_url")
        .optional()
        .isString()
        .withMessage(messages.validation.common.isString),
    body("stock_quantity")
        .optional()
        .isInt({
            min: 1,
        })
        .withMessage(messages.validation.common.isNumber),
]
module.exports = {
    validateProductGetRequest,
    validateProductCreateRequest,
    validateProductUpdateRequest,
}