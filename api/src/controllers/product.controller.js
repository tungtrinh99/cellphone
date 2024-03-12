const { Products, ProductSpecs, Sequelize } = require("../models")
const { messages } = require("../constants/message")
const HttpError = require("../utils/errorResponse")
const HttpSuccess = require("../utils/successResponse")
const HttpStatus = require("../constants/httpStatus")
const { validationResult } = require("express-validator")
require("dotenv").config()

const Op = Sequelize.Op

exports.productController = () => {
    const index = async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            })
        }
        const { offset, limit, text_search } = req.query
        try {
            const products = await Products.findAndCountAll({
                attributes: ["id", "product_name", "brand_name", "original_price", "discount_percent", "condition", "description", "product_image_url", "stock_quantity"],
                ...(offset ? { offset: Number(offset) } : {}), ...(limit ? { limit: Number(limit) } : {}), ...(text_search ? {
                    where: {
                        product_name: {
                            [Op.like]: text_search,
                        },
                    },
                } : {}),
            })
            HttpSuccess.send(res, {
                statusCode: HttpStatus.OK, data: products,
            })
        } catch (error) {
            console.error(error)
            HttpError.send(res, error, HttpStatus.INTERNAL_SERVER_ERROR, null)
        }
    }

    const show = async (req, res) => {
        const { id } = req.params
        try {
            const product = await Products.findByPk(id, {
                attributes: ["id", "product_name", "brand_name", "original_price", "discount_percent", "condition", "description", "product_image_url", "stock_quantity"],
                include: [{
                    model: ProductSpecs,
                    as: "specs",
                    attributes: ["battery_capacity", "memory", "ram", "screen", "color"],
                }],
            })
            if (!product) {
                HttpError.send(res, messages.product.notFound, HttpStatus.NOT_FOUND, null)
            } else {
                HttpSuccess.send(res, {
                    statusCode: HttpStatus.OK, data: product,
                })
            }
        } catch (error) {
            HttpError.send(res, error, HttpStatus.INTERNAL_SERVER_ERROR, null)
        }
    }

    const create = async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            })
        }
        try {
            const product = await Products.create(req.body)
            HttpSuccess.send(res, {
                statusCode: HttpStatus.CREATED, data: product,
            })
        } catch (e) {
            HttpError.send(res, error, HttpStatus.INTERNAL_SERVER_ERROR, null)
        }
    }

    const update = async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            })
        }
        const id = req.params.id
        try {
            await Products.update(req.body, {
                where: {
                    id,
                },
            })
            HttpSuccess.send(res, {
                statusCode: HttpStatus.OK, data: {},
            })
        } catch (e) {
            HttpError.send(res, error, HttpStatus.INTERNAL_SERVER_ERROR, null)
        }
    }

    return {
        index, show, create, update,
    }
}
