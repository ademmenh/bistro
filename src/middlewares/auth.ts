
import {User} from './../db/user'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY as string


export const checkAuth = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    try {
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

        const payload = jwt.verify(bearertoken[1], SECRET_KEY)
        console.log(payload)
        if (!payload) {
            res.status(403).json({errors: "Unauthirized"})
            return
        }

        const id = (payload as {id: string}).id
        if (!id) {
            res.status(403).json({error: "Unauthorized"})
            return
        }

        const user = await User.findById(id)
        if (!user) {
            res.status(403).json({error: "Unauthorized"})
            return

        }

    } catch (err) {
        res.status(403).json({error: "Unauthorized"})
        return
    }

    next()
}
