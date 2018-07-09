const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    author: {type: String},
    comment: {type: String}
});

module.exports = mongoose.model('Comment', Comment);