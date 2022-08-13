module.exports = (app) => {
    const router = require('express').Router()

    const home = require('../controllers/home.controller')

    router.get('/', home.index)

    app.use('/', router)
}