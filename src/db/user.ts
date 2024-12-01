
import {Schema, model, Document, Model, Types} from 'mongoose'
import bcrypt from 'bcrypt'
// import {UserI} from './../types/user'



export interface UserD
extends Document, UserI
{
    passwrodMatches (inputPassword: string): Promise<Boolean>
    dropCollection (Collection: UserM): Promise<Boolean>
}

export type UserM = Model<UserD>


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

export const User = model<UserI, UserM>('User', UserSchema)

export const dropUser = async (): Promise<boolean> => {
    try {
        await User.collection.drop();
        console.log('User collection is dropped.');
        return true
    } catch (error) {
        console.log('Error in dropping User Collection.\n', error);
        return false
    }
}
