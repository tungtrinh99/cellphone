const express = require("express")
const router = express.Router()
const {
    validateSignupBodyRequest,
    validateLoginBodyRequest,
    validateRefreshTokenBodyRequest,
} = require("../validations/auth.validation")
const {
    validateProductGetRequest,
    validateProductCreateRequest,
    validateProductUpdateRequest,
} = require("../validations/product.validation")
const { authController } = require("../controllers/auth.controller")
const { productController } = require("../controllers/product.controller")
const { checkToken } = require("../utils/checkToken")
const passport = require("passport")

// login
router.post("/sign-up", validateSignupBodyRequest, authController().signUp)
router.post("/sign-in", validateLoginBodyRequest, authController().signIn)
router.post("/refresh-token", validateRefreshTokenBodyRequest, authController().refreshToken)
router.post("/verify-email/:id/:token", authController().verifyEmail)
router.post("/forgot-password", authController().forgotPassword)
router.post("/reset-password/:id/:token", authController().resetPassword)
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"], session: false }))
router.get("/auth/google/callback", authController().googleAuthCallback, authController().googleAuthCallbackSuccess)
router.get("/auth/facebook", passport.authenticate("facebook", { scope: ["user_friends", "user_location", "email", "user_gender"] }))
router.get("/auth/facebook/callback", authController().facebookAuthCallback, authController().facebookAuthCallbackSuccess)

router.use(checkToken)
router.post("/change-password", authController().changePassword)

// product
router.get("/products", validateProductGetRequest, productController().index)
router.get("/products/:id", productController().show)
router.post("/products", validateProductCreateRequest, productController().create)
router.put("/products/:id", validateProductUpdateRequest, productController().update)

module.exports = router
