const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "title is required",
        trim: true
    },
    body: {
        type: String,
        required: "body is required",
        trim: true
    },
    authorId: {
        type: objectId,
        required: "authorId is required",
        ref: 'Author'
    },
    tags: [{type:String,trim:true}],

    category: {
        type: String,
        required: "category is required",
        trim: true
    },
    subcategory: [{type:String,trim:true}],
    isDeleted: {
        type: Boolean,
        default: false
    },

    deletedAt:{
        type:Date,
        default:null
    },

    publishedAt:{
        type:Date,
        default:null
    },
    
    isPublished: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });


module.exports = mongoose.model('Blog', blogSchema) 
