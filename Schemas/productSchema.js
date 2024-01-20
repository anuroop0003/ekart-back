const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  description_1: {
    type: String,
    required: true,
  },
  description_2: {
    type: String,
    required: true,
  },
  highestPrice: {
    type: Number,
    required: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  lowestPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  // category: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     ref: 'Category',
  // },
  features: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  rating: {
    type: Array,
    required: true,
  },
  reviews: {
    type: Array,
    required: false,
  },
  colors: {
    type: Array,
    required: true,
  },
  variants: {
    type: Array,
    required: true,
  },
  specifications: {
    type: Array,
    required: true,
  },
  boxItems: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
