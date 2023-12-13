var express = require('express');
const articleController = require("../controllers/articleController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();

router.ger('/',articleController.getArticleAll);
router.ger('/:idArticle',articleController.getArticle);

module.exports = router;