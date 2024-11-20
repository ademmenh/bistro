
import { Application } from 'express'
import {Meals} from './meals'
import {Purchases} from './purchases'
import {Auth} from './auth'
import {checkAdmin} from './../middlewares/auth'


export const addRoutes = (app: Application): any => {
    app.use('/meals',checkAdmin,  Meals)
    app.use('/purchases', Purchases)
    app.use('/auth', Auth)
    
}
