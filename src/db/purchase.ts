
import mongoose from 'mongoose'


const PurchaseSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,

    },

    mealId: {
        type: String,
        required: true,

    },

    date: {
        type: Date,
        required: true,

    },

    completed: {
        type: Boolean,
        default: false,

    },

})

PurchaseSchema.index({complited: 1})
PurchaseSchema.index({date: 1})
export const Purchase = mongoose.model('Purchase', PurchaseSchema)
