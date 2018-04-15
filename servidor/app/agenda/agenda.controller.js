import Agenda from './agenda.model'

exports.listar = (req, res, next) => {
	Agenda.find(function(err, personas) {
		if(err) {
			return next(err)
		}

		return res.status(200).json(personas)
	})
}

exports.crear = (req, res, next) => {

	console.log(req.body)

	var datos = {
		apellido: req.body.apellido,
		nombre: req.body.nombre,
		correo: req.body.correo,
		telefono: req.body.telefono,
		celular: req.body.celular,
		fechaCreacion: new Date(),
		fechaActualizacion: null
	}

	let agenda = new Agenda(datos);

	agenda.save(function(err) {
		if(err) {
			return next(err)
		}

		return res.status(201).json({ mensaje: 'Los datos se agregaron exitosamente.' })
	})
}


exports.mostrar = function(req, res) {
	let idAnotacion = req.params.idAnotacion

	Agenda.findById({ _id:idAnotacion }, function(err, anotacion) {
		if(err) {
			return res.status(204).json({ error: 'Ocurrió un error al tratar de mostrar.' })
		}

		return res.status(200).json(anotacion)
	})
}


exports.eliminar = (req, res) => {
	let idAnotacion = req.params.idAnotacion


	Agenda.findByIdAndRemove({ _id:idAnotacion }, function(err) {
		if(err) {
			return res.status(204).json({ error: 'Ocurrió un error al tratar de eliminar.' })
		}

		return res.status(201).json({ mensaje: 'Se eliminó exitosamente.' })
	})
}


exports.actualizar = (req, res) => {
	let idAnotacion = req.params.idAnotacion

	var datos = {
		apellido: req.body.apellido,
		nombre: req.body.nombre,
		correo: req.body.correo,
		telefono: req.body.telefono,
		celular: req.body.celular,
		// fechaCreacion: new Date(),
		fechaActualizacion: new Date()
	}

	Agenda.findByIdAndUpdate({ _id:idAnotacion }, datos, function(err) {
		if(err) {
			return res.status(204).json({ error: 'Ocurrió un error al tratar de actualizar.' })
		}

		return res.status(201).json({ mensaje: 'Se actualizó exitosamente.' })
	})
}