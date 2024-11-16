
import express from 'express'
import {initServer} from './config/init'
import {addRoutes} from './routes/index'
import cookieParser from 'cookie-parser'

export const app = express()

app.use(cookieParser())
app.use(express.json())

addRoutes(app)
initServer()
