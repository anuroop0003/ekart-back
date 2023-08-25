const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category_1: String,
  category_2: String,
  category_3: String,
  title: String,
  product_rating: String,
  selling_price: String,
  mrp: String,
  seller_name: String,
  seller_rating: String,
  description: String,
  highlights: String,
  image_links: String,
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
