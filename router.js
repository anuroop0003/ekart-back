const productController = require('./Controller/productController');
const express = require('express');
const router = express.Router();
const middleware = require('./Middleware/verifyToken');
const userController = require('./Controller/userController');
const categoryController = require('./Controller/categoryController');
const subCategoryController = require('./Controller/subCategoryController');

router.get('/', (req, res) =>
  res.json('Server Started...........').status(200)
);

// User Routes
router.post('/user/sign/in', userController.signInUser);
router.post('/user/sign/up', userController.signUpUser);
// User Routes

// Category Routes
router.get(
  '/list/category',
  middleware.verifyToken,
  categoryController.listCategory
);
router.post(
  '/add/category',
  middleware.verifyToken,
  categoryController.addCategory
);
// Category Routes

// Sub Category Routes
router.get(
  '/list/category/sub',
  middleware.verifyToken,
  subCategoryController.listCategory
);
router.post(
  '/add/category/sub',
  middleware.verifyToken,
  subCategoryController.addCategory
);
// Sub Category Routes

// Product Routes
router.post(
  '/add/product',
  middleware.verifyToken,
  productController.addProduct
);
router.get(
  '/list/product',
  middleware.verifyToken,
  productController.listProduct
);
// Product Routes

module.exports = router;
