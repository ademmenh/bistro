
import { Application } from 'express'
import {Meals} from './meals'
import {Purchases} from './purchase'
import {Auth} from './auth'



export const addRoutes = (app: Application): any => {
    app.use('/meals', Meals)
    app.use('/purchases', Purchases)
    app.use('/auth', Auth)
    
}
