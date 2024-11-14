
import {body} from 'express-validator'


export const registerValidator = [
    body('name')
        .isString()
        .withMessage('Invalid name type')
        .isLength({min: 3, max: 20})
        .withMessage('Invalid name length'),

    body('lastname')
        .isString()
        .withMessage('Invalid firstname type')
        .isLength({min: 3, max: 20})
        .withMessage('Invalid firstname length'),

    body('username')
        .isString()
        .withMessage('Invalid username type')
        .isLength({min: 3, max: 20})
        .withMessage('Invalid username length'),

    body('birthday')
        .isString()
        .withMessage('Invalid birthday type'),

    body('gender')
        .isString()
        .withMessage('Invalid gender type')
        .isIn(['F', 'M'])
        .withMessage('Invalid gender value'),

    body('email')
        .isString()
        .withMessage('Invalid email type')
        .isEmail()
        .withMessage('Invalid email value'),

    body('password')
        .isString()
        .withMessage('Invalid password')
        .isLength({min: 8, max: 50})
        .withMessage('Invalid password value'),

    
]