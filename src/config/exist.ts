
// import 'dotenv/config'


const envExist = (key: string): string => {
    if (!process.env[`${key}`]) {
        console.log(`${key} is required !!`)
        // process.exit(1)
    }

    console.log(`process.env.[${key}] = ${process.env[`${key}`]}`)
    return (process.env[`${key}`] as string)
}

const envAssign = (key: string, value: any): any => {
    if (!process.env[`${key}`]) {
        process.env[`${key}`] = value
        console.log(`${key} = ${value}`)
        return value
    }

    console.log(`process.env.[${key}] = ${process.env[`${key}`]}`)
    return (process.env[`${key}`] as string)
}


export const PORT = Number(envExist('PORT'))

export const DB_URI = envExist('DB_URI')

export const JWT_EXPIRATION_TIME = Number(envExist('JWT_EXPIRATION_TIME'))

export const JWT_SECRET_KEY = envExist('JWT_SECRET_KEY')

export const NODE_ENV = envExist('NODE_ENV')

export const MEALS_LIMIT = envAssign('MEALS_LIMIT', 12) as number
