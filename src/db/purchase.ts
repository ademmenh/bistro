
import mongoose from 'mongoose'


const PurchaseSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,

    },

    mealsId: {
        type: String,
        required: true,

    },

    complited: {
        type: Boolean,
        required: true,

    },

})

PurchaseSchema.index({complited: 1})

export const Purchase = mongoose.model('Purchase', PurchaseSchema)
