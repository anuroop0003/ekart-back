const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    subCategoryId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    mrp: {
      type: Number,
      required: true,
    },
    specifications: {
      type: Object,
      required: true,
    },
    inventory: {
      type: Object,
      required: true,
    },
    ratings: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
