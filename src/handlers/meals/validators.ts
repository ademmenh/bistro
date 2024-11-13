
import { Request, Response, NextFunction } from "express"
import {param, body, query} from 'express-validator';


let genre = [
    "Algerian",
    "Morocian",
    "Tunisian",
    "Italian",
    "French",
    "Spanish",

]


export const idValidator = [
    param('id')
        .isString()
        .withMessage("the Id invalid")
        .notEmpty()
        .withMessage("the Id is required")

]


export const getMealsQueryValidator = [
    query('page')
    .isInt({min: 0})
    .withMessage('the page is Invalid')
    .optional()

]


export const postMealsBodyValidator = [
    body('name')
    .isString()
    .withMessage('the name type is not String')
    .isLength({min:3, max: 20})
    .withMessage('the name length out of [3-20]'),

    body('genre')
    .isString()
    .withMessage('the genre type is not String')
    .isIn(genre)
    .withMessage('the genre invalid'),

    body('available')
    .isBoolean()
    .withMessage('the available type is not Boolean'),

    body('price')
    .isInt({min: 0})
    .withMessage('the price is Invalid')

]


export const patchMealsBodyValidator = [
    body('name')
    .isString()
    .withMessage('the name type is not String')
    .isLength({min: 3, max: 20})
    .withMessage('the name length is out of [3-20]')
    .optional(),

    body('genre')
    .isString()
    .withMessage('the genre type is not String')
    .isIn(genre)
    .withMessage('the genre Invalid')
    .optional(),

    body('available')
    .isBoolean()
    .withMessage('the available type is not Boolean')
    .optional(),

    body('price')
    .isNumeric()
    .withMessage('the price type is not Number')
    .optional(),

    body('description')
    .isString()
    .withMessage('the description type is not String')
    .isLength({max: 100})
    .withMessage('the description length is out of [0-50]')
    .optional(),

]
