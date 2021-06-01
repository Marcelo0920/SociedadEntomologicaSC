const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect DB
connectDB();

//init middleware
app.use(express.json({extended: false}), function(req, res, next){
    res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
})

app.get('/', (req, res) => res.send('API RUNNING'));

//DEFINE ROUTES
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/comments', require('./routes/api/comments'));
app.use('/api/postulants', require('./routes/api/postulants'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));