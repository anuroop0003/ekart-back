const productController = require('./Controller/productController')
const express = require('express')
const router = express.Router()
const middleware = require('./Middleware/verifyToken')
const userController = require('./Controller/userController')

router.get('/', (req, res) => res.json('Server Started...........').status(200))

// User Routes
router.post('/user/sign/in', userController.signInUser)
router.post('/user/sign/up', userController.signUpUser)
// User Routes

// Product Routes
router.post(
    '/product/selected',
    middleware.verifyToken,
    productController.selectedProducts
)
router.post(
    '/list/products',
    middleware.verifyToken,
    productController.listProducts
)
router.post(
    '/list/categories',
    middleware.verifyToken,
    productController.listCategories
)
router.post(
    '/list/all/categories',
    middleware.verifyToken,
    productController.listMainCategories
)

// Product Routes

module.exports = router
