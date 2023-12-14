var express = require('express');
const adminController = require("../Controllers/adminController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();

//Комментарий из ветки моделей
router.get('/',adminController.getArticleAll);
router.get('/:idArticle',adminController.getArticle);
router.get('/:addArticle',adminController.addArticle);
router.get('/:editArticle',adminController.editArticle);
router.get('/:deleteArticle',adminController.deleteArticle);

module.exports = router;


/*adminController.getArticleAll – Получить список всех статей
adminController.getArticle - Получить текст статьи
adminController.addArticle – Добавить статью
adminController.editArticle – Редактировать статью
adminController.deleteArticle – Удалить статью
articleController.getArticleAll – Получить список всех статей
articleController.getArticle – Получить текст статьи
homeController.getIndex – получить ссылку на главную*/
