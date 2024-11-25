
import { JWT_SECRET_KEY } from '../config/vars'

import {jwtConfig} from './../config/jwt'

import jwt from 'jsonwebtoken' 



export const jwtSign = (payload: JwtPayload ): string => {
    return jwt.sign(payload, JWT_SECRET_KEY, jwtConfig)
}

export const jwtVerify = (token: string): JwtPayload => {
    return jwt.verify(token, JWT_SECRET_KEY) as JwtPayload
}
