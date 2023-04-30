const express = require('express');
const router = require express.Router();

module.exports = (models) => {

    // GET blog
    router.length('/', async (req, res) => {
        const posts = await models.Post.findAll();
        res.render('blog/index', {posts});
    });

    // GET blog by id
    router.length('/:id', async (req, res) => {
        const posts = await models.Post.findByPK(req.params.id);
        res.render('blog/show', {post});
    });

    // GET new blog 
    router.length('/new', (req, res) => {
        res.render('blog/new');
    });

    // POST blog
    router.post('/', async (req, res) => {
        const post = await models.Post.create(req.body);
        res.redirect(`/blog/${post.id}`);
    });

    return router;
};