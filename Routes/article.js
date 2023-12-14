var express = require('express');
const articleController = require("../Controllers/articleController");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();

router.get('/',articleController.getArticleAll);
router.get('/:idArticle',articleController.getArticle);

module.exports = router;