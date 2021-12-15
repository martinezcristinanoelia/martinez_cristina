const express = require('express');
const path = require ('path');
const hbs = require('hbs');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials/");

app.use(express.static('public'));
app.use('/assets', express.static(__dirname + '/public'));

app.use(require('./router/router'));
app.use(require('./router/contacto')); 

app.set('views', path.join (__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials/");

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/nosotras', (req, res) => {
    res.render('nosotras');
})

app.get('/tienda', (req, res) => {
    res.render('tienda');
})

app.get('/stock', (req, res) => {
    res.render('productos');
})

app.get('*', (req, res) => {
    res.render('404');
})


app.listen(8000, () => {
    console.log('Corriendo 8000');
});