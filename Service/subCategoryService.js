const joi = require('joi');
const SubCategory = require('../Schemas/subCategorySchema');

const subCategorySchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  categoryId: joi.string().required(),
  category: joi.string().required(),
});

const subCategoryService = {
  addCategory: async (name, description, categoryId, category) => {
    return new Promise(async (resolve, reject) => {
      try {
        const validationResult = subCategorySchema.validate({
          name,
          description,
          categoryId,
          category,
        });
        if (validationResult.error) {
          const result = {
            message: 'Invalid request. Please provide valid data.',
            status: 400,
          };
          resolve(result);
        }
        const existCategory = await SubCategory.findOne({
          name: name,
          categoryId: categoryId,
          category: category,
        });
        if (!existCategory) {
          const newCategory = new SubCategory({
            name: name,
            description: description,
            categoryId: categoryId,
            category: category,
          });
          await newCategory.save();
          const result = {
            message: 'Sub Category added successfully',
            status: 200,
          };
          resolve(result);
        } else {
          const result = {
            message: 'Sub Category already exist',
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
        const listCategory = await SubCategory.find();
        const result = {
          message: 'Sub Category listed successfully',
          status: 200,
          data: listCategory,
        };
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteCategory: async (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const deleteCategory = await SubCategory.deleteOne({ _id: id });
        const result = {
          message: 'Sub Category delete successfully',
          status: 200,
          data: deleteCategory,
        };
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
  updateCategory: async (id, categoryId, name, description, category) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updateCategory = await SubCategory.findByIdAndUpdate(id, {
          name,
          description,
          category,
          categoryId,
          updatedAt: new Date(),
        });
        const result = {
          message: 'Category update successfully',
          status: 200,
          data: updateCategory,
        };
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
};

module.exports = subCategoryService;
