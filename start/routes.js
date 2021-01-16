'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


//Creamos rutas
Route.post('usuarios/registro', 'UserController.store');
//Agrupar rutas, gropo v1

Route.group(() => {
  Route.post('usuarios/registro', 'UserController.store');
  Route.post('usuarios/login', 'UserController.login');
  Route.get('proyectos', 'ProyectoController.index').middleware('auth'); //middleware ->Es para proteger
  Route.post('proyectos', 'ProyectoController.create').middleware('auth'); 
  Route.delete('proyectos/:id', 'ProyectoController.destroy').middleware('auth');  //Ocupamos metodo destroy
}).prefix('api/v1');
//Agrupar rutas, grupo v2

// Route.group(() => {
//   Route.post('usuarios/registro', 'UserController.store');
// }).prefix('api/v2');