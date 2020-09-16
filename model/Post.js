/*
*POST MODEL DEFINATION
*/
const mongoose = require('mongoose'); //call mongoose 

//define Post Model as Schema with variables
//variables can be defined with json objects
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//export
module.exports = mongoose.model('Posts', PostSchema);