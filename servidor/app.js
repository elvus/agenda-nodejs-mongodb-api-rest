import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'

// Importamos la conexión de la base de datos. 

let saludo = () => `Hola mundo.!`

import db from './config/db'

let app = express()



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials")
  res.header("Access-Control-Allow-Credentials", true)
  next()
})

require('./app/routes')(app)

app.listen(3000, function (err) {
	if(err) {
		console.log('Error al correr en el puerto 3000')
		return
	}

	console.log('Corriendo en el puerto 3000')
})