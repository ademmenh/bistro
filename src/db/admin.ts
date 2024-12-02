
import {Schema, model, Model, Document, Types} from 'mongoose'
import bcrypt from 'bcrypt'

export interface AdminD
extends Document, AdminI
{
    passwordMatches (inputPassword: string): Promise<Boolean>
}

const AdminSchema = new Schema<AdminI>({
    name: {
        type: String,
        required: true,

    },

    lastname: {
        type: String,
        required: true,

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

AdminSchema.methods.passwordMatches = async function (inputPassword: string): Promise<Boolean> {
    return await bcrypt.compare(inputPassword, this.password)
}

export const Admin = model<AdminI, Model<AdminD>>('Admin', AdminSchema)
