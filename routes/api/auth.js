const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

//route POST api/users


router.get('/', auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); //con el -password no adjuntamos la contraseña en los datos
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//ROUTE GET auth
//get logged

router.post('/', 
    [
        check('email', 'La dirección de correo electrónico es requerida').isEmail(),
        check('password', 'La contraseña es requerida').exists()
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
    
    const {email, password} = req.body;

    try {
        //User Exists?? 
        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({errors: [{msg: 'La contraseña o el email son erroneos'}]});
        }

        //verificar que la contraseña es correcta
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({msg: 'La contraseña o el email son erroneos'});
        }
        //Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, 
            config.get('jwtSecret'),
            {expiresIn: 900}, 
            (err, token) => {
                if(err) throw err;
                res.json({token});
            });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
 
      
})

module.exports = router;