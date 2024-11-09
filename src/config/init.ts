
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {app} from './../main'

dotenv.config()
const PORT = Number(process.env.PORT)
const DB_URI = process.env.DB_URI as string

export const initServer = async () => {
    try{
        await mongoose.connect(DB_URI)
        console.log("Connected to Database.")
        app.listen(PORT, () => {
            console.log(`Server Listen on Port ${PORT} ...`)
        })
    } catch {
        console.log("Connection Failed to DataBase")
    }
}
