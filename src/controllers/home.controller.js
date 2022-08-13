const Article = require('../models/article.model')
exports.index = async (req, res) => {
    let articles = await Article.find()
    res.render('index', { 
        data: articles
    })
}