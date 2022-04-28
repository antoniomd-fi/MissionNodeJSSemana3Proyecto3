const User = require('./../../app/models/User')

describe ("Unit Test for User class", () => {
    test ('Create an User Object', () => {
    //Código a utilizar
    const user = new User (1, "carlogilmar", "Carlo", "Bio")
    //Validación
    expect(user.id).toBe(1)
    expect(user.username).toBe("carlogilmar")
    expect(user.name).toBe("Carlo")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
});

})