// const productController = require('./Controller/productController');
const express = require('express');
const router = express.Router();
// const middleware = require('./Middleware/verifyToken');
const userController = require('./Controller/userController').default;
// const categoryController = require('./Controller/categoryController');
// const subCategoryController = require('./Controller/subCategoryController');

router.get('/', (req, res) =>
  res.json('Server Started...........').status(200)
);

// User Routes
router.post('/user/sign/in', userController.signInUser);
router.post('/user/sign/up', userController.signUpUser);
// User Routes

// Category Routes
// router.post(
//   '/add/category',
//   middleware.verifyToken,
//   categoryController.addCategory
// );
// router.get(
//   '/list/category',
//   middleware.verifyToken,
//   categoryController.listCategory
// );
// Category Routes

// Sub Category Routes
// router.post(
//   '/add/category/sub',
//   middleware.verifyToken,
//   subCategoryController.addCategory
// );
// router.get(
//   '/list/category/sub',
//   middleware.verifyToken,
//   subCategoryController.listCategory
// );
// Sub Category Routes

// Product Routes
// router.post(
//   '/add/product',
//   middleware.verifyToken,
//   productController.addProduct
// );
// router.get(
//   '/list/product',
//   middleware.verifyToken,
//   productController.listProduct
// );
// Product Routes

module.exports = router;
