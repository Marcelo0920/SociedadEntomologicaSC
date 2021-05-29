const express = require('express');
const router = express.Router();

const Comment = require('../../models/Comment');


//route POST comment "/"
//post a comment in "Contacto"

router.post('/', async(req, res) => {
    try {
        const newComment = new Comment({
            text: req.body.text
        })

        const comment = await newComment.save();

        res.json(comment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//route GET Comments "/"
//get ALL COMMENTS

router.get('/', async(req, res) => {
    try {
        const comments = await Comment.find().sort({date: -1});
        res.json(comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


module.exports = router;