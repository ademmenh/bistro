
import { dbConfing } from '../../config/db'
import { disconnect } from '../../config/db'

import { app } from './../../app'
import { dropMeal } from '../../db/meal'
import { dropPurchase } from '../../db/purchase'
import { dropUser } from '../../db/user'

import request from 'supertest'




const end_point = '/purchases'
let jwtAdmin = ''
let jwtUser = ''
let mealId = ''
let purchaseId = ''

beforeAll(async () => {
    await dbConfing()
    const response = await request(app)
        .post('/auth/admin/logIn')
        .send({email: "name1@gmail.com", password: "name1name1"})
    jwtAdmin = response.body.token
    console.log(`jwtAdmin: ${jwtAdmin}`)

    const response2 = await request(app)
        .post('/auth/register')
        .send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"2000-12-20", email: "name1@gmail.com", password: "name1name1"})
        jwtUser = response2.body.token
    console.log(`jwtUser: ${jwtUser}`)

    const response3 = await request(app)
        .post('/meals')
        .send({name: "meal1", genre: "Italian", description: "meal1 description", price: 100})
        .set('Authorization', `Bearer ${jwtAdmin}`)
    mealId = response3.body.data._id
    console.log(`mealId: ${mealId}`)

    const response4 = await request(app)
        .post('/purchases')
        .send({mealId})
        .set('Authorization', `Bearer ${jwtUser}`)
    purchaseId = response4.body.data._id
    console.log(`purchaseId: ${purchaseId}`)
})

afterAll(async () => {
    await dropMeal()
    await dropPurchase()
    await dropUser()
    await disconnect()
})



describe(`PATCH ${end_point}`, () => {
    test('Valid completed.', async () => {

        const response = await request(app)
            .patch(end_point+`/${purchaseId}`)
            .send({completed: true})
            .set('Authorization', `Bearer ${jwtAdmin}`)
        
        expect(response.status).toBe(200)
    })
})


describe(`PATCH ${end_point}`, () => {
    test('Valid purchase, but Unauthorized.', async () => {

        const response = await request(app)
            .patch(end_point+`/${purchaseId}`)
            .send({completed: true})
        
        expect(response.status).toBe(403)
    })
})


describe(`PATCH ${end_point}`, () => {
    test('Unvalid purchase completed.', async () => {
        
        const response = await request(app)
            .patch(end_point+`/${purchaseId}`)
            .send({completed: false})
            .set('Authorization', `Bearer ${jwtAdmin}`)

        expect(response.status).toBe(422)
    })
})
