const { Schema, model }  = require('mongoose')

const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    inStock: {type: Boolean, default: true},
    picture: {type: String}

})


module.exports = model('Product', ProductSchema)