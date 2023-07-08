require('dotenv').config()

require('../config/mongodb.js')

const { createUser, /**getUserById*/ } = require('./modules/users/controllers')

const express = require('express')

const app = express()

app.use(express.json()) // Esto es para que funcion el request.body

//RUTAS PARA CONSUMIR MI APLICACIÓN A TRAVÉS DE UNA API

app.get('/api', (req, res) => {
    res.send('API EJECUTANDOSE')
})

//AÑADIR RUTAS DE USUARIOS
app.post('/api/user', createUser)
// app.get('/api/user/:id', getUserById)

//INICIAR SERVIDOR

app.listen(process.env.API_PORT, () => {
    console.log('Server en conexión http://localhost:' + process.env.API_PORT)
})