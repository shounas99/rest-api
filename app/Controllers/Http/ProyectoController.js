'use strict'
const Proyecto = use('App/Models/Proyecto');
const AutorizacionService = use('App/Models/AutorizacionSevrice');

class ProyectoController {
    async index({ auth }){ //auth para que solo los usuarios puedan ver algo
        const user = await auth.getUser(); //Con ello obtendremos nuestro usuario
        console.log(user.id); //Solo quiero que me devuelva el id del usuario
        return await user.proyectos().fetch(); //Quiero que me regrese lo de proyectos todo con fetch
    }
    async create({ auth, request }) { //request porque enviamos datos al servidor
        const user = await auth.getUser();
        const { nombre } = request.all();//DATOS que necesitamos
        const proyecto = new Proyecto(); //Tenemos que llamar al modelo proyecto, asi que lo importamos arriba
                                        //Recibir los datos
                                        // project.nombre = nombre;
                                        //Para no hacer lo de arriba, hacemos un metodo que llenara todos los datos se llama FILL
        proyecto.fill({
            nombre
        });
        //Cargarlo a la BD
        await user.proyectos().save(proyecto); //Llamamos a los metodos
        return proyecto;
        //lo retornamos para que el usuario lo pueda ver
    }
    async destroy({ auth, request, params}){
        //Solamente el usuariodueño
        const user = await auth.getUser();
        const { id } = params;
        const proyecto = await Proyecto.find(id); //Finds es un metodo para buscarlo por el id, en este caso
        //AutorizacionService.verificarPermiso(proyecto, user);
        await proyecto.delete(); //Esto eliminara el proyecto
        return proyecto;
    }
}

module.exports = ProyectoController
