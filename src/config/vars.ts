
import dotenv from 'dotenv'

dotenv.config()
export const PORT = Number(process.env.PORT)
// console.log(PORT)
export const DB_URI = process.env.DB_URI as string
// console.log(DB_URI)
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string
// console.log(JWT_SECRET_KEY)
export const TOKEN_EXPIRATION_TIME = Number(process.env.TOKEN_EXPIRATION_TIME)
// console.log(TOKEN_EXPIRATION_TIME)
export const MEALS_LIMIT = 12
// console.log(MEALS_LIMIT)