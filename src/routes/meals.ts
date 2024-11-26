
import {Router} from 'express'

import {postMeals, getMealsById, getMeals, patchMealsById, deleteMealsById} from './../handlers/meals/'
import {validator} from './../middlewares/validator'
import {idValidator, getMealsQueryValidator, postMealsBodyValidator, patchMealsBodyValidator } from './../handlers/meals/validators'
import { getMealsQueryFilter, patchMealsBodyFilter } from '../middlewares/meals'



export const Meals = Router()

Meals.route('/').post(postMealsBodyValidator, validator, postMeals)
Meals.route('/:id').get(idValidator, validator, getMealsById)
Meals.route('/').get(getMealsQueryValidator, validator, getMealsQueryFilter, getMeals)
Meals.route('/:id').patch(idValidator, patchMealsBodyValidator, validator, patchMealsBodyFilter, patchMealsById)
Meals.route('/:id').delete(idValidator, validator, deleteMealsById)
