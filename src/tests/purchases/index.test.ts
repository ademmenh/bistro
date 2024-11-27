
import { availableMemory } from 'process'
import {app} from './../../'

import request from 'supertest'

const route = '/meals'

describe('testing Hello function.', () => {
    test('Expecting a Hello as return', async () => {
        const response = await request(app).post(route).send({name: "name1", genre: "Algerian", description: "afasdc", price: 100, available: true})

        expect(response.status).toBe(200)
    })
})
