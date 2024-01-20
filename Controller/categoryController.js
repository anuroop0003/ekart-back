const Category = require('../Schemas/categorySchema');
const joi = require('joi');

const categorySchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
});

const categoryController = {
  addCategory: async (req, res) => {
    try {
      const validationResult = categorySchema.validate(req.body);
      if (validationResult.error) {
        return res.status(400).json({
          message: 'Invalid request. Please provide valid data.',
          status: 400,
        });
      }
      const { name, description } = req.body;
      const existCategory = Category.find({ name: name });
      if (!existCategory) {
        const category = new Category({ name: name, description: description });
        await category.save();
        res.status(200).json({
          message: 'Category added successfully',
          status: 200,
        });
      } else {
        res.status(404).json({
          message: 'Category already exist',
          status: 404,
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
  listCategory: async (req, res) => {
    try {
      const listCategory = await Category.find();
      res.status(200).json({
        message: 'Category listed successfully',
        status: 200,
        data: listCategory,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
};

module.exports = categoryController;
