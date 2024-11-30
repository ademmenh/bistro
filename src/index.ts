
import { NODE_ENV } from './config/vars'

import express from 'express'
import {initServer} from './config/init'
import {addRoutes} from './routes/index'
import {errMiddleware} from './middlewares/error'



export const app = express()
app.use(express.json())
addRoutes(app)
if (NODE_ENV !== 'test') {
    initServer(app)
}
app.use(errMiddleware)
