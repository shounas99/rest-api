'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProyectoSchema extends Schema {
  up () {
    this.create('proyectos', (table) => { //Nos creara una tabla proyectos con los campos de id y nombre
      table.increments() //incrementara
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('nombre', 80).notNullable() //Cada proyecto pertenexca a 1 usuario
      table.timestamps() //pondra fecha del dia que se realice
    })
  }

  down () {
    this.drop('proyectos')
  }
}

module.exports = ProyectoSchema
