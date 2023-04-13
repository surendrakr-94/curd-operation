const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: "First name is required",
        trim: true
    },
    lname: {
        type: String,
        required: "last name is required",
        trim: true
    },
    title: {
        type: String,
        required: "title is required",
        trim: true,
        enum: ['Mr', 'Mrs', 'Miss','Mast'],
        
        },
    email: {
        type: String,
        trim: true,
        lowercase:true,
        required: "email address is required",
        unique: true,
        validate:{
            validator:function(email){
                return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            },message:"plese enter a valied email address",isAsync:false
            }

    },
    password: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('Author', authorSchema) 
