const express = require('express');
const {fetchCategory, Store} = require('../controller/quizcontroller');

const router = express.Router();

router.get('/category/:category',fetchCategory);
router.post('/postdata',Store);

module.exports = router;