require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//Configuración global de rutas
app.use(require('./routes/index'));

app.use(express.static(process.cwd() + '/public'));

mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto 3000");
})