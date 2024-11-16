
import {User} from './../db/user'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { console } from 'inspector'


dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY as string

export const checkAuth = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    console.log('hahaha')
    console.log(req.headers.authorization)
    const authHeader = req.headers.authorization
    if (!authHeader) {
        res.status(403).json({error: "Unauthorized"})
        return
    }

    const bearertoken = authHeader.split(' ')

    if (bearertoken[0] !== 'Bearer') {
        res.status(403).json({error: "Unauthorized"})
        return
        
    }

    if (!bearertoken[1]) {
        res.status(403).json({error:"Unauthorized"})
        return
        
    }

    const token = jwt.verify(bearertoken[1], SECRET_KEY)
    if (!token) {
        res.status(403).json({errors: "Unauthirized"})
        return
    }
    

    const id =  (token as {id: string}).id

    if (!id) {
        res.status(403).json({error: "Unauthorized"})
        return
    }

    const user = await User.findOne({id})

    if (!user) {
        res.status(403).json({error: "Unauthorized"})
        return

    }
    next()

}
