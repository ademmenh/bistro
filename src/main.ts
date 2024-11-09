
import express from 'express'
import {initServer} from './config/init'
import {addRoutes} from './routes/init'

export const app = express()

app.use(express.json())

addRoutes(app)
initServer()
