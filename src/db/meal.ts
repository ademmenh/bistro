
import mongoose from 'mongoose'

const schemaMeal = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    price: {
        type: Number,
        require: true,
    },
    discription: {
        type: String,
        require: true,
    },
    available: {
        type: Boolean,
        require: true,
    }
})

const Meal = mongoose.model('Meal', schemaMeal)
