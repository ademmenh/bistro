
import { app } from './../../'
import { dropUser } from '../../db/user'
import { dropMeal } from '../../db/meal'
import { dbConfing } from '../../config/db'
import { disconnect } from '../../config/stop'

import request from 'supertest'

let jwt = ''
beforeAll(async () => {
    await dbConfing()
    const response = await request(app).post(end_point).send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"1000-12-20", email: "name2@gmail.com", password: "name2name2"})
    jwt = response.body.token
    console.log(jwt)
})

afterAll(async () => {
    await dropUser()
    await dropMeal()
    await disconnect()
})

const end_point = '/meals'

describe(`POST ${end_point}`, () => {
    test('Testing Valid logIn.', async () => {
        const response = await request(app).post(end_point).send({name: "meal1", genre: "Algerian", descption: "meal 1 description", price: 100}).set({'Authorization': jwt})

        expect(response.status).toBe(200)
    })
})
