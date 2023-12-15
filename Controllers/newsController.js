const NewsModel = require('../Models/newsModel');

exports.getNewsList = async (req, res) => {
    const newsList = await NewsModel.getAllNews();
    res.render('newsList', {newsList});
};

exports.getNews = async (req, res) => {
    const newsId = req.params.idNews;
    const news = await NewsModel.getNewsById(newsId);
    res.render('newsContent', {news});
};