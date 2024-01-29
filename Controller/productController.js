const productService = require('../Service/productService');

const productController = {
  addProduct: async (req, res) => {
    try {
      const {
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
        ratings,
      } = req.body;
      const result = await productService.addProduct({
        name,
        description,
        type,
        brand,
        model,
        price,
        categoryId,
        id,
        mrp,
        specifications,
        inventory,
        ratings,
      });
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
  listProduct: async (req, res) => {
    const { categoryId, subCategoryId } = req.body;
    try {
      const result = await productService.listProduct(
        categoryId,
        subCategoryId
      );
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id, name, description } = req.body;
      const result = await productService.updateProduct(id, name, description);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.body;
      const result = await productService.deleteProduct(id);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const {
        id,
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
      } = req.body;
      const result = await productService.updateProduct(
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
      );
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message, status: 500 });
    }
  },
};

module.exports = productController;
