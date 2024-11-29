
import app from './../../'
import { disconnect } from '../../config/stop'
import { dropUser } from '../../db/user'

import request from 'supertest'





const end_point = '/auth/logIn'

beforeAll(async () => {
    await request(app).post(end_point).send({name: "name1", lastname: "lastname1", username: "username1", gender: "M", birthday:"1000-12-20", email: "name2@gmail.com", password: "name2name2"})
})

afterAll(async () => {
    let dropped = await dropUser()
    while (!dropped) {
        dropped = await dropUser()
    }
    await disconnect()
})



describe(`POST ${end_point}`, () => {
    test('Testing Valid logIn.', async () => {
        const response = await request(app).post(end_point).send({email: "name1@gmail.com", password: "name1name1"})
    })
})

describe(`POST ${end_point}`, () => {
    test('Testing Unexsiting Email.', async () => {
        const response = await request(app).post(end_point).send({email: "name2name2@gmail.com", password: "name1name1"})
    })
})

describe(`POST ${end_point}`, () => {
    test('Testing Incorrect Passwrod.', async () => {
        const response = await request(app).post(end_point).send({email: "name1@gmail.com", password: "name2name2"})
    } )
})
