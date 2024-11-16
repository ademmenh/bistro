
import {body} from 'express-validator'


export const registerValidator = [
    body('name')
        .isLength({min: 3, max: 20})
        .withMessage('Invalid name length'),

    body('lastname')
        .isLength({min: 3, max: 20})
        .withMessage('Invalid firstname length'),

    body('username')
        .isLength({min: 3, max: 20})
        .withMessage('Invalid username length'),

    body('birthday')
        .isDate()
        .withMessage('Invalid birthday type'),

    body('gender')
        .isIn(['F', 'M'])
        .withMessage('Invalid gender value'),

    body('email')
        .isEmail()
        .withMessage('Invalid email value'),

    body('password')
        .isLength({min: 8, max: 50})
        .withMessage('Invalid password value'),

    
]


export const loginValidator = [
    body('email')
    .isEmail()
    .withMessage('Invalid email'),

    body('password')
    .isLength({min: 8, max: 50})
    .withMessage('Invalid password'),

]
