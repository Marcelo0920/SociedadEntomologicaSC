const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const Postulant = require('../../models/Postulant');


//route POST "/"
//apply request

router.post('/', 
    [
        check('name', 'El nombre es requerido').not().isEmpty(),
        check('email', 'La dirección de correo electrónico es requerida').not().isEmpty(),
        check('text', 'Es necesario que explique el por qué desea unirse').not().isEmpty(),
        check('college', 'Es necesario que escriba el nombre de la Universidad u Colegio al que asiste').not().isEmpty(),
    ], 
    async(req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        try {
            let postulant = {name, email, college, career, text} = req.body;

            //Postulante exists???
            postulant = await Postulant.findOne({email});

            if(postulant){
                return res.status(400).json({errors: [{msg: 'Esta persona ya se postuló'}]});
            }

            postulant = new Postulant({
                name,
                email,
                college,
                career,
                text
            })

            await postulant.save();
        
            res.json(postulant);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
})

//GET get "/"
//get all postulants
// Private

router.get('/',auth ,async(req, res) => {
    try {
        const postulants = await Postulant.find();
        res.json(postulants);
    } catch (err) {
        console.error(err.message);
        res.status('Server Error');
    }
})

module.exports = router;