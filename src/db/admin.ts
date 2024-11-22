
import {Schema, model, Model, Document} from 'mongoose'

export interface AdminD
extends Document, AdminI
{}

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

export const Admin = model<AdminI, Model<AdminD>>('Admin', AdminSchema)
