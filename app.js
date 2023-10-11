if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

// REQUIRES

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const skins = require('./skins');

// DATABASE CONNECTION

mongoose.connect('mongodb://127.0.0.1:27017/skinpicker');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

app.get('/', (req, res) => {
    res.render('home', { skins });
});

app.listen(3000, () => {
    console.log('Serving on port 3000');
});