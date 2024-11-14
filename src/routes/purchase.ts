
import {Router} from 'express'
import {postPurchases, getPurchasesById, patchPurchasesById} from './../handlers/purchases'
import {userIdValidator, postPurchasesBodyValidator, patchPurchasesBodyValidator} from './../handlers/purchases/validators'
import {validator} from './../middlewares/validator'
import { idValidator } from '../handlers/meals/validators'

export const Purchases = Router()

Purchases.route('/').post(postPurchasesBodyValidator, validator, postPurchases)
Purchases.route('/:userId').get(userIdValidator, validator, getPurchasesById)
Purchases.route('/:id').patch(idValidator, validator, patchPurchasesById)
