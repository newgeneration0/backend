const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName : {
        type : String,
        required : [true, 'User name is required']
    },
    productPrice : {
        type : String,
        required : true,
    },
    productDescription : {
        type : String,
        required : true,
    },
    category: {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model("Product", productSchema);