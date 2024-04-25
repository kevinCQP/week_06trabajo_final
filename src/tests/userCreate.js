const user =require("../models/User")

const userCreate = async () =>{
    const user = {
        firstName:'Yoneison',
        lastName:'Bayona',
        email:'Yoneison@gmail.com',
        phone:'123456'
    }
    await User.create(user)
}
module.exports = userCreate