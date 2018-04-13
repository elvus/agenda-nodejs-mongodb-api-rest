import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'

// Importamos la conexión de la base de datos. 

let saludo = () => `Hola mundo.!`

import db from './config/db'

let app = express()

require('./app/routes')(app)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, function (err) {
	if(err) {
		console.log('Error al correr en el puerto 3000')
		return
	}

	console.log('Corriendo en el puerto 3000')
})