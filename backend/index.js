const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const routeQuiz = require('./route/quizroute');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const mongourl = process.env.MONGO_URL;
mongoose.connect(mongourl)
.then(()=>{
    console.log('server connected with mongodb..')
})
.catch((err)=>{
  console.log('something wrong during connection',err)
})

app.use('/api/quiz',routeQuiz);

app.listen(5000,()=>{
    console.log('server runs successfully....')
})