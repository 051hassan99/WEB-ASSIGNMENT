var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var quizMarksSchema = new Schema({
    
    name: String,
    courseName:String,
    quizNo:Number,
    obtainedMarks: Number,
    totalMarks: Number,
    
});

module.exports = mongoose.model('QuizMarks', quizMarksSchema);