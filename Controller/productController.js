const Products = require('../Schemas/productSchema')

exports.listProducts = async (req, res) => {
    const { skip_limit, type, category, max_limit } = req.body
    try {
        const productsLength = await Products.countDocuments({
            [category]: type,
        })
        const productsList = await Products.find({ [category]: type })
            .skip(skip_limit)
            .limit(max_limit)
        res.status(200).json({
            message: 'Products fetched successfully',
            data: {
                productsList: productsList,
                productsLength: productsLength,
            },
            status: 200,
        })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.selectedProducts = async (req, res) => {
    const { id } = req.body
    const productRequested = await Products.findById(id)
    try {
        res.status(200).json({
            message: 'Products fetched successfully',
            data: productRequested,
            status: 200,
        })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

// exports.listProducts = async (req, res) => {
//   const { type, category } = req.body;
//   try {
//     const productsList = await Products.find({ [category]: type })
//     res.status(200).json({ message: "Products fetched successfully", data: productsList, status: 200 });
//   } catch (error) {
//     res.status(500).json({ message: error.message, status: 500 });
//   }
// };

exports.listCategories = async (req, res) => {
    const { category } = req.body
    try {
        const productsCategories = await Products.distinct(`${category}`)
        res.status(200).json({
            message: 'Products categories fetched successfully',
            data: { data: productsCategories, type: category },
            status: 200,
        })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}

exports.listMainCategories = async (req, res) => {
    try {
        const selectedFields = 'category_1 category_2' // Space-separated list of fields to select
        const selectedProducts = await Products.find(
            { category_1: { $in: 'category_1' } }, // Adjust the field name if needed
            selectedFields
        ).exec()
        res.status(200).json({
            message: 'Products categories fetched successfully',
            data: selectedProducts,
            status: 200,
        })
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 })
    }
}
