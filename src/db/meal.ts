
import {Schema, model, Document, Model, Types} from 'mongoose'



export interface MealD
extends Document, MealI
{}


export type MealM = Model<MealD> 


const MealSchema = new Schema<MealI>({
    mealId: {
        type: Types.ObjectId,
        required: true,
        unique: true,
        ref: "MealId",
                
    },

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
        default: false,
    
    }
})

MealSchema.index({available: 1})

export const Meal = model<MealI, MealM>('Meal', MealSchema)

export const dropMeal = async (): Promise<boolean> => {
    try {
        await Meal.collection.drop();
        console.log('User collection is dropped.');
        return true
    } catch (error) {
        console.log('Error in dropping User Collection.\n', error);
        return false
    }
}
