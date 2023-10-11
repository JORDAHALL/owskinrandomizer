const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const skinSchema = new Schema({
    title: String,
    image: String
});

module.exports = mongoose.model('Skin', skinSchema);