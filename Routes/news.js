const express = require('express');
const newsController = require('../controllers/newsController.js');

const router = express.Router();
var bodyParser = require('body-parser'); 
const jsonParser = express.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', newsController.getNewsAll); // Список новостей

router.get('/:idNews', newsController.getNews); // Просмотр одной новости

module.exports = router;
