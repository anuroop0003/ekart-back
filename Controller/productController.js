const Products = require('../Schemas/productSchema');
const joi = require('joi');

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
    try {
      const validationResult = productSchema.validate(req.body);
      if (validationResult.error) {
        return res.status(400).json({
          message: 'Invalid request. Please provide valid data.',
          status: 400,
        });
      }
      const existingProduct = await Products.findOne({
        name: name,
      });
      if (!existingProduct) {
        const product = new Products({
          name: name,
          brand: brand,
          colors: colors,
          category: category,
          description_1: description_1,
          features: features,
          rating: rating,
          image: image,
          reviews: reviews,
          categoryId: categoryId,
          variants: variants,
          specifications: specifications,
          lowestPrice: lowestPrice,
          highestPrice: highestPrice,
          description_2: description_2,
          currentPrice: currentPrice,
          boxItems: boxItems,
        });
        await product.save();
        res.status(200).json({
          message: 'Product added successfully',
          status: 200,
        });
      } else {
        res.status(404).json({
          message: 'Product already exist',
          status: 404,
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
  listProduct: async (req, res) => {
    try {
      const productsList = await Products.find();
      res.status(200).json({
        message: 'Product listed successfully',
        data: productsList,
        status: 200,
      });
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
};

module.exports = productController;
