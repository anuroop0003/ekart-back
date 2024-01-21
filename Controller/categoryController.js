const categoryService = require('../Service/categoryService');

const categoryController = {
  addCategory: async (req, res) => {
    try {
      const { name, description } = req.body;
      const result = await categoryService.addCategory(name, description);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
  listCategory: async (req, res) => {
    try {
      const result = await categoryService.listCategory();
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
};

module.exports = categoryController;
