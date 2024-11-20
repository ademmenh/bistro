
import {User} from './../db/user'
import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
import { stat } from 'fs'
import { Admin } from '../db/admin'


dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY as string


export const checkAuth = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            res.status(422).json({status: "Unprocessable Content"})
            return
        }

        const [bearer, token] = authHeader.split(' ')
        if (!bearer || !token) {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        const payload = jwt.verify(token, SECRET_KEY)
        if (!payload) {
            res.status(403).json({errors: "Unauthirized"})
            return
        }

        const {id} = payload as JwtUserPayload
        if (!id) {
            res.status(403).json({error: "Unauthorized"})
            return
        }

        const user = await User.findById(id)
        if (!user) {
            res.status(403).json({error: "Unauthorized"})
            return

        }

        next()

    } catch (err) {
        res.status(403).json({error: "Unauthorized"})
        return
    }
}


export const checkAdmin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    
    try {

        const authHeader = req.headers.authorization
        if (!authHeader) {
            res.status(422).json({status: "Unprocessable Content"})
            return
        }

        const [bearer, token] = authHeader.split(' ')
        if (!bearer || !token) {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        const payload = jwt.verify(token, SECRET_KEY)
        // TODO: log a danger
        if (!payload) {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        // TODO: log a danger
        const {id, isAdmin} = payload as JwtAdminPayload
        if (!id || !isAdmin) {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        // TODO: log a danger
        const admin = Admin.findById(id)
        if (!admin) {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        next()

    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}
