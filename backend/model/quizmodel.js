const mongoose = require('mongoose');

const QuizApp = new mongoose.Schema({
    question:{
        type: String,
        required: true,
    },
    answer:{
        type: String,
        required:true,
    },
    options:{
        type: [String],
        required:true,
    },
    category:{
        type: String,
    }
})

const quizapp = mongoose.model('quiz',QuizApp);
module.exports = quizapp;