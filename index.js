const express = require('express');// Importando Libreria
const routes = require('./app/controllers/routes')

const app = express(); //Creando Servidor
app.use(express.json()) //Configurando el Servidor para Envio y Recepcion de Json

const PORT = 3000;

app.use('/banco',routes);

// Corriendo el Servidor
app.listen(PORT, () => {
    console.log('Escuhando puerto:',PORT);
});