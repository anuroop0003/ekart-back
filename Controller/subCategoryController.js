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
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.body;
      const result = await subCategoryService.deleteCategory(id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { categoryId, name, description, category, id } = req.body;
      const result = await subCategoryService.updateCategory(
        id,
        categoryId,
        name,
        description,
        category
      );
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
};

module.exports = subCategoryController;
