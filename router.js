const userController = require("./Controller/userController");
const productController = require("./Controller/productController");
const express = require("express");
const router = express.Router();

// User Routes
router.get("/user/get", userController.getUser);
router.post("/user/login", userController.loginUser);
router.post("/user/sendmail", userController.sendPasswordMail);
// User Routes

// Product Routes
router.get("/list/products", productController.listProducts);
router.post("/list/categories", productController.listCategories);
router.post("/list/all/categories", productController.listMainCategories);

// Product Routes

module.exports = router;
