
import {Schema, model, Document, Model} from 'mongoose'
import bcrypt from 'bcrypt'

export interface UserD
extends Document, UserI
{
    // name: string
    // lastname: string
    // username: string
    // birthday: Date
    // gender: Gender
    passwrodMatches (inputPassword: string): Promise<Boolean>
}


const UserSchema = new Schema<UserI>({
    name: {
        type: String,
        required: true,

    },

    lastname: {
        type: String,
        required: true,
    
    },

    username: {
        type: String,
        required: true,
        unique: true,
    
    },

    birthday: {
        type: Date,
        requird: true,
    
    },

    gender: {
        type: String,
        required: true,
        enum: ['M', 'F'],

    },

    email: {
        type: String,
        required: true,
        unique: true,
    
    },

    password: {
        type: String,
        required: true,

    },

    
})

UserSchema.index({username: 1})

UserSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
        
    } catch (err) {
        next()
        console.log(err)

    }
})

UserSchema.methods.passwrodMatches = async function (inputPassword: string): Promise<Boolean> {
    return await bcrypt.compare(inputPassword, this.password);
} 

export const User = model<UserI, Model<UserD>>('User', UserSchema)
