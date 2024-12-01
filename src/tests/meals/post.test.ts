
import { dbConfing } from '../../config/db'
import { disconnect } from '../../config/stop'

import { app } from './../../'
import { dropMeal } from '../../db/meal'

import request from 'supertest'





let jwt = ''
beforeAll(async () => {
    await dbConfing()
    const response = await request(app).post('/auth/admin/logIn').send({email: "name1@gmail.com", password: "name1name1"})
    jwt = response.body.token
})

afterAll(async () => {
    await dropMeal()
    await disconnect()
})



const end_point = '/meals'

describe(`POST ${end_point}`, () => {
    test('Valid meal.', async () => {
        
        const response = await request(app)
            .post(end_point).send({name: "meal1", genre: "Italian", description: "meal1 description", price: 100})
            .set('Authorization', `Bearer ${jwt}`)
        
        expect(response.status).toBe(200)
    })
})


describe(`POST ${end_point}`, () => {
    test('Unvalid name.', async () => {
        
        const response = await request(app)
            .post(end_point).send({name: "me", genre: "Italian", description: "meal1 description", price: 100})
            .set('Authorization', `Bearer ${jwt}`)
        
        expect(response.status).toBe(422)
    })
})


describe(`POST ${end_point}`, () => {
    test('Unvalid genre.', async () => {
        
        const response = await request(app)
            .post(end_point).send({name: "meal1", genre: "Korean", description: "meal1 description", price: 100})
            .set('Authorization', `Bearer ${jwt}`)
        
        expect(response.status).toBe(422)
    })
})


describe(`POST ${end_point}`, () => {
    test('Unvalid price.', async () => {
        
        const response = await request(app)
            .post(end_point).send({name: "meal1", genre: "Italian", description: "meal1 description", price: -100})
            .set('Authorization', `Bearer ${jwt}`)
        
        expect(response.status).toBe(422)
    })
})

