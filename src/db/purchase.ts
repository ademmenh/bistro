
import {Schema, model, Types, Document, Model} from 'mongoose'


export interface PurchaseD extends Document, PurchaseI {}

const PurchaseSchema = new Schema<PurchaseI>({
    mealId: {
        type: Types.ObjectId,
        ref: 'Meal',
        required: true,

    },

    completed: {
        type: Boolean,
        default: false,

    },

}, {timestamps: {createdAt: "createdAt", updatedAt: false}})

PurchaseSchema.index({completed: 1})

export const Purchase = model<PurchaseI, Model<PurchaseD>>('Purchase', PurchaseSchema)

export const dropPurchase = async (): Promise<Boolean> => {
    try {
        await Purchase.collection.drop()
        console.log('Purchase is dropped.')
        return true
    } catch (err) {
        console.log('Purchase is not dropped')
        console.log(err)
        return false;
    }
}