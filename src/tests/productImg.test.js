const request = ('supertest')
const app  = require('../app')
const URL_BASE = 'api/v1/product'
let TOKEN
beforAll(async()=>{
    const user ={
        email:"yoneison@gmail.com",
        password: "yoneison1234"
    }
})
test("POST -> " )