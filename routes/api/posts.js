const express = require('express');
const router = express.Router();
const auth =    require('../../middleware/auth');
const upload = require('../../middleware/upload');
const {validationResult} = require('express-validator');

const Post = require('../../models/Post');
const User = require('../../models/User');

//route POST api/users


router.post('/', auth, async(req, res) => {

    console.log(req.body);

    const errors = validationResult(req);
    const postImg = req.file;
    if(!errors.isEmpty() && postImg){
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const user = await User.findById(req.user.id).select('-password');

        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            title: req.body.title,
            avatar: user.avatar,
            user: req.user.id,
            postImg: req.body.url
        })
        const post = await newPost.save();

        res.send(post);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
    
})

//@route  GET api/posts
//@desc Get all posts
//@access Public

router.get('/', async(req, res) => {
    try {
      const posts = await Post.find().sort({date: -1});
      res.send(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@route  GET api/posts/:id
//@desc Get post by id
//@access Public

router.get('/:id', async(req, res) => {
    try {
      const post = await Post.findById(req.params.id);

      if(!post){
          return res.status(404).json({msg: 'No existe el post que busca :('});
      }
      res.send(post);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg:'No existe el post que busca :('});
        }
        res.status(500).send('Server Error');
    }
})

//@route  DELETE api/posts/:id
//@desc Delete a post
//@access private

router.delete('/:id',auth, async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if(!post){
            return res.status(404).json({msg: 'No existe el post que busca :('});
        }

        //Check if user ownes the post
        if(post.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Usted no está autorizado para hacer esto >:('});
        }

        await post.remove();

        res.json({msg: '¡Post eliminado con éxito!'});
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg: 'No existe el post que busca :('});
        }
        res.status(500).send('Server Error');
    }
})

////////////////////////////////////////////////////////////////////////////////////7


module.exports = router;