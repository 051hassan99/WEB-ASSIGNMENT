var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var feedbakSchema = new Schema({
    
    name: String,
    feedback: String,
    
});

module.exports = mongoose.model('feedback', feedbakSchema);