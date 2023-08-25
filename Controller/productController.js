const Products = require("../Schemas/productSchema");

exports.listProducts = async (req, res) => {
  try {
    const productsList = await Products.find();
    res.status(200).json({ message: "Products fetched successfully", data: productsList, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};

exports.listCategories = async (req, res) => {
  const { category } = req.body;
  try {
    const productsCategories = await Products.distinct(`${category}`);
    res.status(200).json({ message: "Products categories fetched successfully", data: productsCategories, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};

exports.listMainCategories = async (req, res) => {
  const { category } = req.body;
  const desiredCategories = ["selling_price"];
  try {
    // `${category}`
    const selectedFields = "category_1 category_2"; // Space-separated list of fields to select
    const selectedProducts = await Products.find(
      { category_1: { $in: "category_1" } }, // Adjust the field name if needed
      selectedFields
    ).exec();

    // console.log("Selected products:", selectedProducts);
    res.status(200).json({ message: "Products categories fetched successfully", data: selectedProducts, status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};
