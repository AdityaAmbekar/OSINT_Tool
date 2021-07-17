const express = require('express');
// const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')

const app = express();
const port = process.env.PORT || 3000;

// view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// routes
// app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
// app.get('/grep', requireAuth, (req, res) => res.render('grep'));


app.listen(port, () => {
    console.log('server is running on port ' + port);
})