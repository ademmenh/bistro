
import {Application} from 'express'
import Router from 'express'

import {postMeals, getMealsById, getMeals} from './../handlers/meals'


export const Meals = Router()

Meals.route('/').post(postMeals)
Meals.route('/:id').get(getMealsById)
Meals.route('/').get(getMeals)
