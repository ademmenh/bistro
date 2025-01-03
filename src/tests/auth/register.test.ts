
import { app } from './../../app'
import { disconnect } from '../../config/db'
import { dropUser } from '../../db/user'
import { dbConfing } from '../../config/db'

import request from 'supertest'




beforeAll(async () => {
    // console.log(process.env)
    await dbConfing()
})

afterAll(async () => {
    await dropUser()
    await disconnect()
})


const end_point = '/auth/register'

describe(`POST ${end_point}`, () => {
    test('Testing register.', async () => {
        const response = await request(app).post(end_point).send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "name1name1"})
    
        expect(response.status).toBe(200)
    })
})

describe(`POST ${end_point}`, () => {
    test('Testing Excesting Email.', async () => {
        const response = await request(app).post(end_point).send({name: "name11", lastname: "lastname11", username: "username11", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "name1name1"})
    
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
