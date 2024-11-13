
import {Router} from 'express'

import {postMeals, getMealsById, getMeals, patchMealsById, deleteMealsById} from './../handlers/meals/'
import {validator} from './../middlewares/validator'
import {idValidator, getMealsQueryValidator, postMealsBodyValidator, patchMealsBodyValidator } from './../handlers/meals/validators'

export const Meals = Router()

Meals.route('/').post(postMealsBodyValidator, validator, postMeals)
Meals.route('/:id').get(idValidator, validator, getMealsById)
Meals.route('/').get(getMealsQueryValidator, validator, getMeals)
Meals.route('/:id').patch(idValidator, patchMealsBodyValidator, validator, patchMealsById)
Meals.route('/:id').delete(idValidator, validator, deleteMealsById)
