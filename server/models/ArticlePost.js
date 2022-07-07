const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
    article_id: String,
    article_title: String,
    article_description: String,
    article_image: String,
    article_thumbnail: String,
    
})

module.exports = mongoose.model('Articles', Article);