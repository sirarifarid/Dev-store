const mongoose = require('mongoose')

const ProductCategorySchema = new mongoose.Schema({
    category: {type: String, required: true},
    image: {type: String, required: true},
},
{timestamps: true})
module.exports = mongoose.model('ProductCategory', ProductCategorySchema)