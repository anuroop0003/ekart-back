const subCategoryService = require('../Service/subCategoryService');

const subCategoryController = {
  addCategory: async (req, res) => {
    try {
      const { name, description, categoryId, category } = req.body;
      const result = await subCategoryService.addCategory(
        name,
        description,
        categoryId,
        category
      );
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
  listCategory: async (req, res) => {
    try {
      const result = await subCategoryService.listCategory();
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
};

module.exports = subCategoryController;
