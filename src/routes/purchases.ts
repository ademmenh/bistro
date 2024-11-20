
import {Router} from 'express'
import {postPurchases, getPurchasesById, patchPurchasesById} from './../handlers/purchases'
import {userIdValidator, postPurchasesBodyValidator, patchPurchasesBodyValidator} from './../handlers/purchases/validators'
import {validator} from './../middlewares/validator'
import { idValidator } from '../handlers/meals/validators'
import { checkAuth, checkAdmin } from '../middlewares/auth'

export const Purchases = Router()

Purchases.route('/').post(checkAuth, postPurchasesBodyValidator, validator, postPurchases)
Purchases.route('/:userId').get(checkAuth, userIdValidator, validator, getPurchasesById)
Purchases.route('/:id').patch(checkAdmin, idValidator, patchPurchasesBodyValidator, validator, patchPurchasesById)
