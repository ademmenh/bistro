
import {Router} from 'express'

import {postMeals, getMealsById, getMeals, patchMealsById, deleteMealsById, deleteMeals} from './../handlers/meals'


export const Meals = Router()

Meals.route('/').post(postMeals)
Meals.route('/:id').get(getMealsById)
Meals.route('/').get(getMeals)
Meals.route('/:id').put(patchMealsById)
Meals.route('/:id').delete(deleteMealsById)
Meals.route('/').delete(deleteMeals)
