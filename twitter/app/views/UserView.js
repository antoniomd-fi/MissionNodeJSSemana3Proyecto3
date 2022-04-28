const UserService = require('./../services/UserService')

class UserView{
    static createUser(payload){
        if (payload === null){
            return {error:"payload no existe"}
        }
        else
            var newUser = UserService.create(payload.id,payload.username,payload.name)
            if(Object.values(payload).includes(null)){
                return {error:"necesitan tener un valor válido"}
            }
            else if (Object.values(payload).length!=3)
                return {error:"necesitan tener un valor válido"}
            else
                return newUser
    }
}

module.exports = UserView