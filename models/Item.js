const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        // Example categories
        enum: ['Electronics', 'Books', 'Clothing', 'Home Goods'], 
    },
    imageUrl: {
        type: String,
        required: false, // You can make this required if you want
    },
    stock: {
        type: Number,
        default: 1,
    }
});

module.exports = mongoose.model('Item', ItemSchema);