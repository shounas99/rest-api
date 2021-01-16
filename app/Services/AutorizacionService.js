//Lo comente Porque no lo tenia el video const { ModelNotFoundException } = require("@adonisjs/lucid/src/Exceptions");
const AccesoProhibidoException = use ('App/Exceptions/AccesoProhibidoException');
const RecursoNoEncontradoException = use('App/Exceptions/RecursoNoEncontradoException');
class AutorizacionService{
    verificarPermiso(recurso, user){ //Metodo, va a obtener el recursoa  autilizar
        if(!recurso){ //Si no hay recurso se va a la otra excepccion
            throw new RecursoNoEncontradoException();
        }
        if(recurso.user_id !== user.id){ //Si el usuario tiene el mismo id que el proyecto
            throw new AccesoProhibidoException(); //Arrojara un error
        };
    }
}

module.exports = new AutorizacionService();