
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
    // console.log(`token: ${jwt}`)

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



describe(`PATCH ${end_point}`, () => {
    test ('Valid meals name patch.', async () => {
        const response = await request(app)
            .patch(end_point+`/${id}`)
            .send({name: "name2"})
            .set('Authorization', `Bearer ${jwt}`)

        expect(response.status).toBe(200)
    })
})


describe(`PATCH ${end_point}`, () => {
    test ('Valid meals genre patch.', async () => {
        const response = await request(app)
            .patch(end_point+`/${id}`)
            .send({genre: "Algerian"})
            .set('Authorization', `Bearer ${jwt}`)

        expect(response.status).toBe(200)
    })
})


describe(`PATCH ${end_point}`, () => {
    test ('Valid meals availability patch.', async () => {
        const response = await request(app)
            .patch(end_point+`/${id}`)
            .send({available: true})
            .set('Authorization', `Bearer ${jwt}`)

        expect(response.status).toBe(200)
    })
})


describe(`PATCH ${end_point}`, () => {
    test ('Valid meals price patch.', async () => {
        const response = await request(app)
            .patch(end_point+`/${id}`)
            .send({price: 450})
            .set('Authorization', `Bearer ${jwt}`)

        expect(response.status).toBe(200)
    })
})


describe(`PATCH ${end_point}`, () => {
    test ('Valid meals description patch.', async () => {
        const response = await request(app)
            .patch(end_point+`/${id}`)
            .send({description: "new meal1 description"})
            .set('Authorization', `Bearer ${jwt}`)

        expect(response.status).toBe(200)
    })
})


describe(`PATCH ${end_point}`, () => {
    test ('Unvalid meals name patch.', async () => {
        const response = await request(app)
            .patch(end_point+`/${id}`)
            .send({name: "na"})
            .set('Authorization', `Bearer ${jwt}`)

        expect(response.status).toBe(422)
    })
})


describe(`PATCH ${end_point}`, () => {
    test ('Unvalid meals genre patch.', async () => {
        const response = await request(app)
            .patch(end_point+`/${id}`)
            .send({genre: "Korean"})
            .set('Authorization', `Bearer ${jwt}`)

        expect(response.status).toBe(422)
    })
})


describe(`PATCH ${end_point}`, () => {
    test ('Unvalid meals price patch.', async () => {
        const response = await request(app)
            .patch(end_point+`/${id}`)
            .send({price: -100})
            .set('Authorization', `Bearer ${jwt}`)

        expect(response.status).toBe(422)
    })
})
