
import { timeStamp } from 'console'
import mongoose from 'mongoose'


const PurchaseSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,

    },

    mealId: {
        type: mongoose.Types.ObjectId,
        ref: 'Meal',
        required: true,

    },

    completed: {
        type: Boolean,
        default: false,

    },

}, {timestamps: {createdAt: "createdAt", updatedAt: false}})

PurchaseSchema.index({completed: 1})

export const Purchase = mongoose.model('Purchase', PurchaseSchema)
