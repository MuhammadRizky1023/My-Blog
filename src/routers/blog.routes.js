module.exports = (app) => {
    const router = require('express').Router()

    const blog = require('../controllers/blog.controller')

    router.get('/create', blog.create) 
    router.post('/', blog.store)
    router.get('/:id', blog.show)
    router.get("/:id/edit", blog.edit)
    router.patch('/:id', blog.update)
    router.delete('/:id', blog.delete)

    app.use('/blog', router)
}