
import {QueryI} from './express'


declare interface PurchaseI {
    userId: string,
    mealId: string,
    completed: boolean,
    createdAt: Date,

}


declare interface PurchaseQ
extends QueryI {
    completed?: boolean,
}

