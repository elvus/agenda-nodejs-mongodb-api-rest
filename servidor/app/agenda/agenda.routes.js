import agendaCtrl from './agenda.controller.js'

export default (app) => {
	app.route('/api/v1/anotaciones')
	   .get(agendaCtrl.listar)

	app.route('/api/v1/anotaciones/nuevo')
	   .post(agendaCtrl.crear)

	app.route('/api/v1/anotaciones/:idAnotacion/mostrar')
	   .get(agendaCtrl.mostrar)

	app.route('/api/v1/anotaciones/:idAnotacion/eliminar')
	   .delete(agendaCtrl.eliminar)

	app.route('/api/v1/anotaciones/:idAnotacion/actualizar')
	   .put(agendaCtrl.actualizar)
	   
}