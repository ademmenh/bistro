
import {Router} from 'express'
import {registerValidator} from './../handlers/auth/validators'
import {validator} from './../middlewares/validator'
import {postAuthRegister} from './../handlers/auth'


export const Auth = Router()

Auth.route('/register').post(registerValidator, validator, postAuthRegister)
