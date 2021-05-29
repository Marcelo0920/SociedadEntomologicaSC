const path = require('path');
const multer = require('multer');

//Destination for files

var imgStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads')
    },

    // Add back extension
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
})

//uploads parameters for multer

var upload = multer({
    storage: imgStorage,
    fileFilter: function(req, file, callback){
        if(!file.originalname.match(/\.(png|jpg)$/) ){
            return callback (new Error('Por favor solo suba imagenes de tipo JPG o PNG'))
        }
        callback(undefined, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload;