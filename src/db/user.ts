
import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
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
    
    },

    password: {
        type: String,
        required: true,

    },

    
})

UserSchema.index({username: 1})

export const User = mongoose.model('User', UserSchema)
