const Category = require('../Schemas/categorySchema');
const joi = require('joi');

const categorySchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
});

const categoryService = {
  addCategory: async (name, description) => {
    return new Promise(async (resolve, reject) => {
      try {
        const validationResult = categorySchema.validate({ name, description });
        if (validationResult.error) {
          const result = {
            message: 'Invalid request. Please provide valid data.',
            status: 400,
          };
          resolve(result);
        }
        const existCategory = Category.find({ name: name });
        if (!existCategory) {
          const category = new Category({
            name: name,
            description: description,
          });
          await category.save();
          const result = {
            message: 'Category added successfully',
            status: 200,
          };
          resolve(result);
        } else {
          const result = {
            message: 'Category already exist',
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
  listCategory: async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const listCategory = await Category.find();
        const result = {
          message: 'Category listed successfully',
          status: 200,
          data: listCategory,
        };
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
};

module.exports = categoryService;
