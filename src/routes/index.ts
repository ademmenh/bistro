
import { Application } from 'express'
import {Meals} from './meals'
import {Purchases} from './purchases'
import {Auth} from './auth'
import {isAdmin} from './../middlewares/auth'


export const addRoutes = (app: Application): void => {
    app.use('/meals', isAdmin,  Meals)
    app.use('/purchases', Purchases)
    app.use('/auth', Auth)
    
}
