
import {param, body} from 'express-validator'



export const idValidator = [
    param('id')
    .isString()
    .withMessage('the userId is invalid'),

]


export const postPurchasesBodyValidator = [
    body('mealId')
    .isString()
    .withMessage('Invalid mealId type'),

]


export const patchPurchasesBodyValidator = [
    body('completed')
    .isBoolean()
    .withMessage('Invalid completed type'),

]
