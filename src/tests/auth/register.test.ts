
import app from './../../index'
import { disconnect } from '../../config/stop'
import { dropUser } from '../../db/user'

import request from 'supertest'



const end_point = '/auth/register'

afterAll(async () => {
    let dropped = await dropUser()
    while (!dropped) {
        dropped = await dropUser()
    }
    await disconnect()
})



describe(`POST ${end_point}`, () => {
    test('Testing register.', async () => {
        const response = await request(app).post(end_point).send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "name1name1"})
    
        expect(response.status).toBe(200)
    })
})

describe(`POST ${end_point}`, () => {
    test('Testing Excesting Email.', async () => {
        const response = await request(app).post(end_point).send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "name1name1"})
    
        expect(response.status).toBe(422)
    })
})


describe(`POST ${end_point}`, () => {
    test('Testing name validator.', async () => {
        const response = await request(app).post(end_point).send({name: "na", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "name1name1"})
    
        expect(response.status).toBe(422)
    })
})

describe(`POST ${end_point}`, () => {
    test('Testing lastname validator.', async () => {
        const response = await request(app).post(end_point).send({name: "name1", lastname: "la", username: "username1", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "name1name1"})
    
        expect(response.status).toBe(422)
    })
})

describe(`POST ${end_point}`, () => {
    test('Testing username validator.', async () => {
        const response = await request(app).post(end_point).send({name: "name1", lastname: "lastname1", username: "us", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "name1name1"})
    
        expect(response.status).toBe(422)
    })
})

describe(`POST ${end_point}`, () => {
    test('Testing gender validator.', async () => {
        const response = await request(app).post(end_point).send({name: "name1", lastname: "lastname1", username: "username1", gender: "X", birthday:"2000-12-20", email: "name1@gmail.com", password: "name1name1"})
    
        expect(response.status).toBe(422)
    })
})

describe(`POST ${end_point}`, () => {
    test('Testing email validator.', async () => {
        const response = await request(app).post(end_point).send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "name1.com", password: "name1name1"})
    
        expect(response.status).toBe(422)
    })
})

describe(`POST ${end_point}`, () => {
    test('Testing password validator.', async () => {
        const response = await request(app).post(end_point).send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "nam"})
    
        expect(response.status).toBe(422)
    })
})
