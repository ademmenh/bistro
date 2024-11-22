
import {Schema, model, Document, Model} from 'mongoose'

export interface UserD
extends Document, UserI
{}


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

export const User = model<UserI, Model<UserD>>('User', UserSchema)
