const userController = require("./Controller/userController");
const productController = require("./Controller/productController");
const express = require("express");
const router = express.Router();
const middleware = require("./Middleware/verifyToken");

router.get("/", (req, res) => res.json("Server Started...........").status(200));

// User Routes
router.get("/user/get", middleware.verifyToken, userController.getUser);
router.post("/user/login", userController.loginUser);
router.post("/user/sendmail", userController.sendPasswordMail);
// User Routes

// Product Routes
router.get("/list/products", middleware.verifyToken, productController.listProducts);
router.post("/list/categories", middleware.verifyToken, productController.listCategories);
router.post("/list/all/categories", middleware.verifyToken, productController.listMainCategories);

// Product Routes

module.exports = router;
