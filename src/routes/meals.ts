
import {Application} from 'express'
import Router from 'express'

import {postMeals, getMealsById, getMeals, putMealsById, putMeals, deleteMealsById, deleteMeals} from './../handlers/meals'


export const Meals = Router()

Meals.route('/').post(postMeals)
Meals.route('/:id').get(getMealsById)
Meals.route('/').get(getMeals)
Meals.route('/:id').put(putMealsById)
Meals.route('/').put(putMeals)
Meals.route('/:id').delete(deleteMealsById)
Meals.route('/').delete(deleteMeals)
