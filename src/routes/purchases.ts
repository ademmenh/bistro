
import {Router} from 'express'
import {postPurchases, getPurchasesById, patchPurchasesById} from './../handlers/purchases'
import {userIdValidator, postPurchasesBodyValidator, patchPurchasesBodyValidator} from './../handlers/purchases/validators'
import {validator} from './../middlewares/validator'
import { idValidator } from '../handlers/meals/validators'
import { isUser, isAdmin } from '../middlewares/auth'

export const Purchases = Router()

Purchases.route('/').post(isUser, postPurchasesBodyValidator, validator, postPurchases)
Purchases.route('/:userId').get(isUser, userIdValidator, validator, getPurchasesById)
Purchases.route('/:id').patch(isAdmin, idValidator, patchPurchasesBodyValidator, validator, patchPurchasesById)
