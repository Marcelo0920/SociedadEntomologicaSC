const express = require('express');
const router = express.Router();
const auth =    require('../../middleware/auth');
const {validationResult} = require('express-validator');


const User = require('../../models/User');
const Reuniones = require('../../models/Reunion');



//ROUTER post a new REUNION 
//ACCESS PRIVATE

router.post('/', auth, async(req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const user = await User.findById(req.user.id).select('-password');

        const newReunion = new Reuniones({
            text: req.body.text,
            name: user.name,
            title: req.body.title,
            user: req.user.id,
        })
        const reunion = await newReunion.save();

        res.send(reunion);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//ROUTER GET ALL REUNIONS
//ACCESS PUBLIC

router.get('/', async(req, res) => {
    try {
      const reunions = await Reuniones.find().sort({date: -1});
      res.send(reunions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


//@route  DELETE api/posts/reuniones/:id
//@desc Delete a post
//@access private

router.delete('/:id',auth, async(req, res) => {
    try {
        const reunion = await Reuniones.findById(req.params.id);
        
        if(!post){
            return res.status(404).json({msg: 'No existe la imagen que busca :('});
        }

        //Check if user ownes the post
        if(post.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Usted no está autorizado para hacer esto >:('});
        }

        await reunion.remove();

        res.json({msg: '¡Post eliminado con éxito!'});
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg: 'No existe el post que busca :('});
        }
        res.status(500).send('Server Error');
    }
})


module.exports = router;