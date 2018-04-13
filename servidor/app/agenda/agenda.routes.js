import agendaCtrl from './agenda.controller.js'

export default (app) => {
	app.route('/api/v1/anotaciones')
	   .get(agendaCtrl.listar)
}