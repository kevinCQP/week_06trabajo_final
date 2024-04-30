const request = require('supertest');
const app = require('../app');
const BASE_URL = '/api/v1/users'
let TOKEN; // Variable para almacenar el token
let userId 
beforeAll(async () => {
    // Realiza una solicitud de inicio de sesión para obtener un nuevo token
    const login = {
      email:'yoneison1234@gmail.com',
      password:'yoneison1234',
    };

    const res = await request(app)
        .post(`${BASE_URL}/login`)
        .send(login);

    // Almacena el token obtenido
    TOKEN = res.body.token;
});

test('GET -> BASE_URL, should return status 200, and res.body.length === 1', async () => {
    const res = await request(app)
        .get(BASE_URL)
        .set('Authorization', `Bearer ${TOKEN}`); // Utiliza el token en el encabezado de autorización

    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(res.body).toHaveLength(1);
}); 
test('POST -> BASE_URL, should return status 201, and res.body.firtsName === user.firstName', async ()=>{
    const user ={
        firstName: "Maicol",
        lastName:"Salazar",
        email:"maicol@gmail.com",
        password:"maicol1234",
        phone:"1234"

    }
    const  res =  await request(app)
    .post(BASE_URL)
    .send(user)

    userId  =  res.body.id
    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
    expect(res.body.firstName).toBe(user.firstName);
})
test("PUT -> 'BASE_URL/:id', should return status code 200, res.body.lastName === userUpdate.lastName", async () => {
    const userUpdate = {
      lastName: "Andrade"
    }
  
    const res = await request(app)
      .put(`${BASE_URL}/${userId}`)
      .send(userUpdate)
      .set('Authorization', `Bearer ${TOKEN}`)
  
    expect(res.status).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.lastName).toBe(userUpdate.lastName)
  })
test("POST -> 'BASE_URL/login, should return statusCode 200, res.body.email === user.email and res.body.token to be defined", async ()=>{
    const user  = {
        email:"maicol@gmail.com",
        password:"maicol1234",
    }
    const  res = await request(app)
    .post(`${BASE_URL}/login`)
    .send(user)
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.user.email).toBe(user.email)
    expect(res.body.token).toBeDefined()
})
test("Delete-> 'BASE_URL/:id,should return statuscode 204", async()=>{
    const res = await request(app)
    .delete(`${BASE_URL}/${userId}`)
    .set('Authorization', `Bearer ${TOKEN}`)
    expect(res.statusCode).toBe(204)
})