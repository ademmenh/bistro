
import {app} from '../../'

import request from 'supertest'



const route = '/auth/register'

describe(`POST ${route}`, () => {
    test('Testing register.\nExpecting 200.', async () => {
        const response = await request(app).post(route).send({name: "name2", lastname: "lastname2", username: "username2", gender: "M", birthday:"2000-12-20", email: "name2@gmail.com", password: "name2name2"})
    
        expect(response.status).toBe(200)
    })
})

describe(`POST ${route}`, () => {
    test('Testing name validator.\nExpecting 422.', async () => {
        const response = await request(app).post(route).send({name: "n", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "email@gmail.com", password: "name2name"})
    
        expect(response.status).toBe(422)
    })
})

describe(`POST ${route}`, () => {
    test('Testing lastname validator.\nExpecting 422.', async () => {
        const response = await request(app).post(route).send({name: "name1", lastname: "la", username: "username1", gender: "M", birthday:"2000-12-20", email: "email@gmail.com", password: "name2name"})
    
        expect(response.status).toBe(422)
    })
})

describe(`POST ${route}`, () => {
    test('Testing username validator.\nExpecting 422.', async () => {
        const response = await request(app).post(route).send({name: "name1", lastname: "lastname1", username: "us", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "name2name"})
    
        expect(response.status).toBe(422)
    })
})

describe(`POST ${route}`, () => {
    test('Testing gender validator.\nExpecting 422.', async () => {
        const response = await request(app).post(route).send({name: "name1", lastname: "lastname1", username: "username1", gender: "Z", birthday:"2000-12-20", email: "email@gmail.com", password: "name2name"})
    
        expect(response.status).toBe(422)
    })
})

describe(`POST ${route}`, () => {
    test('Testing email validator.\nExpecting 422.', async () => {
        const response = await request(app).post(route).send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "email.com", password: "name2name"})
    
        expect(response.status).toBe(422)
    })
})

describe(`POST ${route}`, () => {
    test('Testing password validator.\nExpecting 200.', async () => {
        const response = await request(app).post(route).send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "email@gmail.com", password: "01"})
    
        expect(response.status).toBe(422)
    })
})
