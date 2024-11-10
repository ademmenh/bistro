
import mongoose from 'mongoose'

const schemaMeal = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    genre: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    available: {
        type: Boolean,
        require: true,
    }
})

export const Meal = mongoose.model('Meal', schemaMeal)
