
import { app } from './../../app'
import { disconnect } from '../../config/db'
import { dropUser } from '../../db/user'
import { dbConfing } from '../../config/db'

import request from 'supertest'



beforeAll(async () => {
    // console.log(process.env)
    await dbConfing()
    await request(app).post('/auth/register').send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "name1name1"})
})

afterAll(async () => {
    await dropUser()
    await disconnect()
})


const end_point = '/auth/logIn'

describe(`POST ${end_point}`, () => {
    test('Valid logIn.', async () => {
        const response = await request(app).post(end_point).send({email: "name1@gmail.com", password: "name1name1"})
        
        expect(response.status).toBe(200)
    })
})

describe(`POST ${end_point}`, () => {
    test('Unexsiting Email.', async () => {
        const response = await request(app).post(end_point).send({email: "name2@gmail.com", password: "name1name1"})
        
        expect(response.status).toBe(422)
    })
})

describe(`POST ${end_point}`, () => {
    test('Incorrect Passwrod.', async () => {
        const response = await request(app).post(end_point).send({email: "name1@gmail.com", password: "name2name2"})
    
        expect(response.status).toBe(422)
    })
})
