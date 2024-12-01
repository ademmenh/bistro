
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
        .withMessage("invalid Id type")
        .notEmpty()
        .withMessage("required Id")

]


export const getMealsQueryValidator = [
    query('page')
    .isInt({min: 0})
    .withMessage('Invalid page')
    .optional()

]


export const postMealsBodyValidator = [
    body('name')
    .isString()
    .withMessage('Invalid name type')
    .isLength({min:3, max: 20})
    .withMessage('Invalid name legnth'),

    body('genre')
    .isString()
    .withMessage('Invalid genre type')
    .isIn(genre)
    .withMessage('Invalid genre value'),

    body('description')
    .isString()
    .withMessage('Invalid description type')
    .isLength({min: 0, max: 100}),
    
    body('price')
    .isInt({min: 0})
    .withMessage('Invalid price type')

]


export const patchMealsBodyValidator = [
    body('name')
    .isString()
    .withMessage('Invalid name type')
    .isLength({min: 3, max: 20})
    .withMessage('Invalid name length')
    .optional(),

    body('genre')
    .isString()
    .withMessage('Invalid genre type')
    .isIn(genre)
    .withMessage('Invalid genre value')
    .optional(),

    body('available')
    .isBoolean()
    .withMessage('Invalid available type')
    .optional(),

    body('price')
    .isNumeric()
    .withMessage('Invalid price type')
    .isInt({min: 0})
    .optional(),

    body('description')
    .isString()
    .withMessage('Invalid description type')
    .isLength({max: 100})
    .withMessage('Invalid description length')
    .optional(),

]
