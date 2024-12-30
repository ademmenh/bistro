
import { DB_URI } from './exist'

import mongoose from 'mongoose'



export const dbConfing = async (): Promise<Boolean> => {
    
    try {
        console.log('connecting to DataBase...')
        await mongoose.connect(DB_URI)
        console.log('connected to DataBase\n')
        
        return true
    } catch (err) {
        console.log('failed to connect to DataBase.\n')
        console.log(err)
        process.exit(1)
        
    }
}

export const disconnect = async () => {
    await mongoose.disconnect()
}
