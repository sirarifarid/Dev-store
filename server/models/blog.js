const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: String, required: true},
    role: {type: String, required: true},
    urlToImage: {type: String, required: true},
    publishedAt: {type: String, required: true},
},
{timestamps: true})
module.exports = mongoose.model('Blog', BlogSchema)