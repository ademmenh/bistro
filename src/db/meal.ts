
import {Schema, model, Document, Model} from 'mongoose'



export interface MealD
extends Document, MealI
{
    dropCollection (): Promise<Boolean>
}


export type MealM = Model<MealD> 


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

MealSchema.methods.dropCollection = async function (): Promise<Boolean> {
    await Meal.collection.drop()
        .then(() => {
            console.log('Meal Collection is dropped.')
        })
        .catch(() => {
            console.log('Error in dropping Meal Collection')
            return false
        })
    
    return true
}

export const Meal = model<MealI, MealM>('Meal', MealSchema)
