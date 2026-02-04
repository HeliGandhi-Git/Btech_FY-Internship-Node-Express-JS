const mongoose = require('mongoose')

//schema-structure.
const ProductSchema = new mongoose.Schema({
    product_name: String,
    product_details: String,
    product_price: Number ,
    created : {
        type : Date,
        default : Date.now
    }
})

//Model with name and schema
module.exports = mongoose.model('Product', ProductSchema)