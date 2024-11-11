
import {Application} from 'express'
import Router from 'express'

import {postMeals, getMealsById, getMeals, putMealsById, deleteMealsById} from './../handlers/meals'


export const Meals = Router()

Meals.route('/').post(postMeals)
Meals.route('/:id').get(getMealsById)
Meals.route('/').get(getMeals)
Meals.route('/:id').put(putMealsById)
Meals.route('/:id').delete(deleteMealsById)
