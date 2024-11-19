
import { Application } from 'express'
import {Meals} from './meals'
import {Purchases} from './purchases'
import {Auth} from './auth'
import {chcekAdmin} from './../middlewares/auth'


export const addRoutes = (app: Application): any => {
    app.use('/meals',chcekAdmin,  Meals)
    app.use('/purchases', Purchases)
    app.use('/auth', Auth)
    
}
