import Agenda from './agenda.model'

exports.listar = (req, res, next) => {
	Agenda.find(function(err, personas) {
		if(err) {
			return next(err)
		}

		res.status(201).json(personas)
	})
}

// exports.crear = (req, res) => {

// }