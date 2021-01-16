'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Proyecto extends Model {
    //Crearemos un metodo
    user () {
        return this.belongsTo('App/Models/User')
      }
    
}

module.exports = Proyecto
