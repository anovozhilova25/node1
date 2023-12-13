var express = require('express');
const adminController = require("../controllers/adminController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();

//Контроллеры для админ панели
router.ger('/',adminController.getArticleAll);
router.ger('/:idArticle',adminController.getArticle);
router.ger('/:addArticle',adminController.addArticle);
router.ger('/:editArticle',adminController.editArticle);
router.ger('/:deleteArticle',adminController.deleteArticle);

module.exports = router;

