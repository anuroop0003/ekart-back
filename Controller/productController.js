const productService = require('../Service/productService.js');

const productController = {
  addProduct: async (req, res) => {
    try {
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
        subCategoryId,
        variants,
        lowestPrice,
      } = req.body;
      const result = await productService.addProduct({
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
        subCategoryId,
        variants,
        lowestPrice,
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
};

module.exports = productController;
