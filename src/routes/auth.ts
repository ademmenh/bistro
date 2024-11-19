
import {Router} from 'express'
import {registerValidator, loginValidator} from './../handlers/auth/validators'
import {validator} from './../middlewares/validator'
import {postAuthRegister, postAuthLogIn} from './../handlers/auth'


export const Auth = Router()

Auth.route('/register').post(registerValidator, validator, postAuthRegister)
Auth.route('/logIn').post(loginValidator, validator, postAuthLogIn)
Auth.route('/admin/logIn').post(loginValidator, validator, postAuthLogIn)