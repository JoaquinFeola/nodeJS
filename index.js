require('dotenv').config();
require('./database/dbConnect');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// HBS
const hbs = require('express-handlebars');
const hbsConfig = hbs.create({
    partialsDir: __dirname + '/views/components',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine(hbsConfig));
app.set('view engine', 'hbs');


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/appRoutes'));

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))









