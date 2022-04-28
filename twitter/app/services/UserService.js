const User = require('./../models/User')

class UserService{
    static create(id,username,name){
        return new User(id, username,name, "Sin bio")
    }

    static getInfo (User){
        let info =[User.id,User.username,User.name,User.bio]
        return info
    }

    static updateUsername(User, newUsername){
        User.username=newUsername
    }

    static getAllUsernames = lista => {
       var usernames = []
        for (let i=0;i<lista.length;i++){
            usernames[i]=lista[i].username
        }
        return usernames
    }
}

module.exports = UserService