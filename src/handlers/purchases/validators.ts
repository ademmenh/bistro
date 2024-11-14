
import {param, body} from 'express-validator'



export const idValidator = [
    param('id')
    .isString()
    .withMessage('the userId is invalid'),

]


export const userIdValidator = [
    param('userId')
    .isString()
    .withMessage('the userId is invalid'),

]


export const postPurchasesBodyValidator = [
    body('userId')
    .isString()
    .withMessage('Invalid userId type'),

    body('mealId')
    .isString()
    .withMessage('Invalid mealId type'),

    body('completed')
    .isBoolean()
    .withMessage('Invalid completed type'),


]


export const patchPurchasesBodyValidator = [
    body('completed')
    .isBoolean()
    .withMessage('Invalid completed type'),

]
