const mongoose = require('./connection')

const ItemSchema = new mongoose.Schema({
    seller: String,
    itemName: String,
    description: String,
    quantity: Number,
    price: Number

})

const Item = mongoose.model('Item', ItemSchema)

module.exports = Item