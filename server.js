const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

//connect DB
connectDB();

app.use(cors());

//init middleware
app.use(express.json({extended: false}));

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.get('/', (req, res) => res.send('API RUNNING'));

//DEFINE ROUTES
app.use('/uploads', express.static('uploads'));

app.use('/api/reunions', require('./routes/api/reunions'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/comments', require('./routes/api/comments'));
app.use('/api/postulants', require('./routes/api/postulants'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));