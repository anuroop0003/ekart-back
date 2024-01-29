const productController = require('./Controller/productController');
const express = require('express');
const userController = require('./Controller/userController');
const router = express.Router();
const middleware = require('./Middleware/verifyToken');
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
router.post(
  '/add/category',
  middleware.verifyToken,
  categoryController.addCategory
);
router.get(
  '/list/category',
  middleware.verifyToken,
  categoryController.listCategory
);
router.post(
  '/delete/category',
  middleware.verifyToken,
  categoryController.deleteCategory
);
router.post(
  '/edit/category',
  middleware.verifyToken,
  categoryController.updateCategory
);
// Category Routes

// Sub Category Routes
router.post(
  '/add/category/sub',
  middleware.verifyToken,
  subCategoryController.addCategory
);
router.get(
  '/list/category/sub',
  middleware.verifyToken,
  subCategoryController.listCategory
);
router.post(
  '/delete/category/sub',
  middleware.verifyToken,
  subCategoryController.deleteCategory
);
router.post(
  '/edit/category/sub',
  middleware.verifyToken,
  subCategoryController.updateCategory
);
// Sub Category Routes

// Product Routes
router.get(
  '/list/product',
  middleware.verifyToken,
  productController.listProduct
);
router.post(
  '/add/product',
  middleware.verifyToken,
  productController.addProduct
);
router.post(
  '/delete/product',
  middleware.verifyToken,
  productController.deleteProduct
);
router.post(
  '/edit/product',
  middleware.verifyToken,
  productController.updateProduct
);
// Product Routes

module.exports = router;
