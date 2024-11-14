
import { Application } from 'express'
import {Meals} from './meals'
import {Purchases} from './purchase'

export const addRoutes = (app: Application): any => {
    app.use('/meals', Meals)
    app.use('/purchases', Purchases)

}
