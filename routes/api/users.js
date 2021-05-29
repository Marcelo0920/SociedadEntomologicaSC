const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../models/User');

//route POST api/users
// register user


router.post('/', 
    [
        check('name', 'El nombre es requerido').not().isEmpty(),
        check('email', 'La dirección de correo electrónico es requerida').not().isEmpty(),
        check('password', 'Por favor, introduzca una contraseña de 6 o mas caracteres').isLength({min: 6}),
        check('career', 'Por favor introduzca su profesión')
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
    
    const {name, email, password, career} = req.body;

    try {
        //User Exists?? 
        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({errors: [{msg: 'Este usuario ya existe'}]});
        }
        //Get users profile pic
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })
       
        user = new User({
            name,
            email,
            password,
            career,
            avatar
        })
         //Encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();
        //Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, 
            config.get('jwtSecret'),
            {expiresIn: 36000}, 
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

