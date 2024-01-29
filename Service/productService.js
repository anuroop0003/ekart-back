const Products = require('../Schemas/productSchema');
const joi = require('joi');

const productSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  type: joi.string().required(),
  brand: joi.string().required(),
  model: joi.string().required(),
  price: joi.number().required(),
  mrp: joi.number().required(),
  categoryId: joi.string().required(),
  id: joi.string().required(),
  specifications: joi.object().required(),
  inventory: joi.object().required(),
  ratings: joi.array().required(),
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
          subCategoryId: reqBody.id,
          categoryId: reqBody.categoryId,
          brand: reqBody.brand,
          model: reqBody.model,
          name: reqBody.name,
        });
        if (!existingProduct) {
          const product = new Products({
            name: reqBody.name,
            description: reqBody.description,
            type: reqBody.type,
            brand: reqBody.brand,
            model: reqBody.model,
            price: reqBody.price,
            mrp: reqBody.mrp,
            categoryId: reqBody.categoryId,
            subCategoryId: reqBody.id,
            specifications: reqBody.specifications,
            inventory: reqBody.inventory,
            ratings: reqBody.ratings,
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
  updateProduct: async (
    name,
    description,
    type,
    brand,
    model,
    price,
    mrp,
    categoryId,
    id,
    specifications,
    inventory,
    ratings
  ) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updateProduct = await Products.findByIdAndUpdate(id, {
          name,
          description,
          type,
          brand,
          model,
          price,
          mrp,
          categoryId,
          specifications,
          inventory,
          ratings,
          updatedAt: new Date(),
        });
        const result = {
          message: 'Product update successfully',
          status: 200,
          data: updateProduct,
        };
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteProduct: async (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const deleteProduct = await Products.deleteOne({ _id: id });
        const result = {
          message: 'Product delete successfully',
          status: 200,
          data: deleteProduct,
        };
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
};

module.exports = productService;
