
import { Application } from 'express'
import {Meals} from './meals'

export const addRoutes = (app: Application) => {
    app.use('/meals', Meals)
}
