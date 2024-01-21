const Products = require('../Schemas/productSchema');
const joi = require('joi');
const productService = require('../Service/productService');

const productSchema = joi.object({
  name: joi.string().required(),
  brand: joi.string().required(),
  boxItems: joi.string().required(),
  category: joi.string().required(),
  colors: joi.array().required(),
  currentPrice: joi.number().required(),
  description_1: joi.string().required(),
  description_2: joi.string().required(),
  highestPrice: joi.number().required(),
  categoryId: joi.string().required(),
  features: joi.string().required(),
  image: joi.string().required(),
  reviews: joi.array().required(),
  specifications: joi.array().required(),
  rating: joi.array().required(),
  variants: joi.array().required(),
  lowestPrice: joi.number().required(),
});

const productController = {
  addProduct: async (req, res) => {
    try {
      const {
        name,
        brand,
        boxItems,
        category,
        colors,
        currentPrice,
        description_1,
        description_2,
        highestPrice,
        features,
        image,
        reviews,
        specifications,
        rating,
        categoryId,
        variants,
        lowestPrice,
      } = req.body;
      const result = await productService.addProduct({
        name,
        brand,
        boxItems,
        category,
        colors,
        currentPrice,
        description_1,
        description_2,
        highestPrice,
        features,
        image,
        reviews,
        specifications,
        rating,
        categoryId,
        variants,
        lowestPrice,
      });
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
  listProduct: async (req, res) => {
    try {
      const result = await productService.listProduct();
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
};

module.exports = productController;
