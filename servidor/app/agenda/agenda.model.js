import mongoose, { Schema } from 'mongoose'

const AgendaSchema = new Schema({
	nombre: {
		type: String
	},
	apellido: {
		type: String
	},
	correo: {
		type: String,
		unique: true
	},
	telefono: {
		type: Number
	},
	celular: {
		type: Number,
		default: false
	},
	fechaCreacion: {
		type: Date
	},
	fechaActualizacion: {
		type: Date
	}
})

export default mongoose.model('Agenda', AgendaSchema)