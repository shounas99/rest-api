'use strict'

const User = use('App/Models/User') //Uso mi constante usuario, para importar el modelo usuario desde la ruta

class UserController {
    async login({request , auth}){
        const { email, password} = request.all();
        const token = await auth.attempt(email, password);
        return token;   
    }
    //Guardamos en BD un registro, con el metodo de store qu ehare
    //request porque necesito la informacion
    async store({request}){
        const {email, password} = request.all();
        const user = await User.create({ 
            email, 
            password,
            username: email //Los podemos igualar, lo dejamos asi para escribir menos
        });
        return this.login(...arguments); //Quiero que al final me devuelva al usuario creado
    };
}

module.exports = UserController
