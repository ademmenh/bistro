
import express from 'express'
import {initServer} from './config/init'
import {addRoutes} from './routes/index'

export const app = express()

app.use(express.json())

addRoutes(app)
initServer()
