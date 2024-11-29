

import mongoose from 'mongoose'



export const disconnect = async () => {
    await mongoose.disconnect()
}
