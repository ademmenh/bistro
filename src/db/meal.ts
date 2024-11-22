
import {Schema, model, Document, Model} from 'mongoose'

export interface MealD
extends Document, MealI
{}


const MealSchema = new Schema<MealI>({
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

MealSchema.index({available: 1})

export const Meal = model<MealI, Model<MealD>>('Meal', MealSchema)
