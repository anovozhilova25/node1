var express = require('express');
const adminController = require("../controllers/adminController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();

//Комментарий из ветки моделей
router.ger('/',adminController.getArticleAll);
router.ger('/:idArticle',adminController.getArticle);
router.ger('/:addArticle',adminController.addArticle);
router.ger('/:editArticle',adminController.editArticle);
router.ger('/:deleteArticle',adminController.deleteArticle);

module.exports = router;


/*adminController.getArticleAll – Получить список всех статей
adminController.getArticle - Получить текст статьи
adminController.addArticle – Добавить статью
adminController.editArticle – Редактировать статью
adminController.deleteArticle – Удалить статью
articleController.getArticleAll – Получить список всех статей
articleController.getArticle – Получить текст статьи
homeController.getIndex – получить ссылку на главную*/
