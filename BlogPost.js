const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/blogDB");

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Tile Not Added"]
    },
    body : {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model("Post", postSchema);