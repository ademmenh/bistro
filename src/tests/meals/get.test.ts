
import { dbConfing } from '../../config/db'
import { disconnect } from '../../config/stop'

import { app } from './../../'
import { dropMeal } from '../../db/meal'

import request from 'supertest'





const end_point = '/meals'
let jwt = ''
let id = ''


beforeAll(async () => {
    await dbConfing()
    const response = await request(app).post('/auth/admin/logIn')
                                        .send({email: "name1@gmail.com", password: "name1name1"})
    jwt = response.body.token
    // console.log(`jwt: ${jwt}`)
    
    const response2 = await request(app)
            .post(end_point)
            .send({name: "meal1", genre: "Italian", description: "meal1 description", price: 100})
            .set('Authorization', `Bearer ${jwt}`)
    console.log(`response2: ${response2}`)
    id = response2.body.data._id
    // console.log(`id: ${id}`)
})

afterAll(async () => {
    await dropMeal()
    await disconnect()
})




describe(`GET ${end_point}`, () => {
    test ('get all meals', async () => {
        const response = await request(app)
        .get(end_point)
        .set('Authorization', `Bearer ${jwt}`)

        expect(response.status).toBe(200)
    }) 
})


describe(`GET ${end_point}`, () => {
    test ('get meals by id', async () => {
        const response = await request(app)
        .get(end_point+`/${id}`)
        .set('Authorization', `Bearer ${jwt}`)

        expect(response.status).toBe(200)
    }) 
})
