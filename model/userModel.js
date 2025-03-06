const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : [true, 'User name is required']
    },
    email : {
        type : String,
        required : true,
        unique : [true, 'Email already register, try Login']
    },
    password : {
        type : String,
        required : true,
    },
    role: {
        type : String,
        required : true,
        default : 'ADMIN'
    }
});

module.exports = mongoose.model("User",userSchema);