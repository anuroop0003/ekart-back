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
  subCategoryId: joi.string().required(),
  features: joi.string().required(),
  image: joi.string().required(),
  reviews: joi.array().required(),
  specifications: joi.array().required(),
  rating: joi.array().required(),
  variants: joi.array().required(),
  lowestPrice: joi.number().required(),
});

const productService = {
  addProduct: async (reqBody) => {
    return new Promise(async (resolve, reject) => {
      try {
        const validationResult = productSchema.validate(reqBody);
        if (validationResult.error) {
          const result = {
            message: 'Invalid request. Please provide valid data.',
            status: 400,
          };
          resolve(result);
        }
        const existingProduct = await Products.findOne({
          name: reqBody.name,
          categoryId: reqBody.categoryId,
          subCategoryId: reqBody.subCategoryId,
        });
        if (!existingProduct) {
          const product = new Products({
            name: reqBody.name,
            brand: reqBody.brand,
            colors: reqBody.colors,
            category: reqBody.category,
            description_1: reqBody.description_1,
            features: reqBody.features,
            rating: reqBody.rating,
            image: reqBody.image,
            reviews: reqBody.reviews,
            categoryId: reqBody.categoryId,
            subCategoryId: reqBody.subCategoryId,
            variants: reqBody.variants,
            specifications: reqBody.specifications,
            lowestPrice: reqBody.lowestPrice,
            highestPrice: reqBody.highestPrice,
            description_2: reqBody.description_2,
            currentPrice: reqBody.currentPrice,
            boxItems: reqBody.boxItems,
          });
          await product.save();
          const result = {
            message: 'Product added successfully',
            status: 200,
          };
          resolve(result);
        } else {
          const result = {
            message: 'Product already exist',
            status: 404,
          };
          resolve(result);
        }
      } catch (error) {
        // res.status(500).json({ message: error.message, status: 500 });
        reject(error);
      }
    });
  },
  listProduct: async (categoryId, subCategoryId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const query = {};
        if (categoryId) {
          query.categoryId = categoryId;
        }
        if (subCategoryId) {
          query.subCategoryId = subCategoryId;
        }
        const productsList = await Products.find(query);
        const result = {
          message: 'Product listed successfully',
          data: productsList,
          status: 200,
        };
        resolve(result);
      } catch (error) {
        // res.status(500).json({ message: error.message, status: 500 });
        reject(error);
      }
    });
  },
};

module.exports = productService;
