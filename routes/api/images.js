const express = require('express');
const router = express.Router();
const auth =    require('../../middleware/auth');
const upload = require('../../middleware/upload');
const {validationResult} = require('express-validator');

const Image = require('../../models/Image');
const User = require('../../models/User');


//route POST api/users


router.post('/', upload.single('postImg'),  auth, async(req, res) => {

    const errors = validationResult(req);
    const postImg = req.file;
    if(!errors.isEmpty() && postImg){
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const user = await User.findById(req.user.id).select('-password');

        const newImage = new Image(postImg);
        const post = await newPost.save();

        res.send(post);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
    
})

module.exports = router;