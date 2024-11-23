
import { User } from './../db/user'
import { Admin } from '../db/admin'
import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY as string


export const isUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            res.status(422).json({status: "Unprocessable Content"})
            return
        }

        const [bearer, token] = authHeader.split(' ')
        if (!bearer || !token) {
            console.log("bearer and token empty")
            res.status(403).json({status: "Unauthorized"})
            return
        }
        console.log("bearer and token not empty")
        
        if (bearer !== 'Bearer') {
            console.log("not bearer")
            res.status(403).json({status: "Unauthorized"})
            return
        }
        console.log("bearer")


        const {id, email} = jwt.verify(token, SECRET_KEY) as JwtUserPayload
        // TODO: log a warning
        if (!id || !email) {
            console.log("id and email are empty")
            res.status(403).json({status: "Unauthorized"})
            return
        }
        console.log("id and email not empty")

        const user = await User.findById(id)
        console.log(typeof user)
        // TODO: log a warning
        if (!user) {
            console.log("user empty")
            res.status(403).json({status: "Unauthorized"})
            return

        }
        console.log(user)
        req.user = user
        next()

    } catch (err) {
        console.log(err)
        res.status(403).json({status: "Unauthorized"})
        return
    }
}


export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    
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

        if (bearer !== 'Bearer') {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        const payload = jwt.verify(token, SECRET_KEY)
        // TODO: log a warning
        if (!payload) {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        // TODO: log a warning
        const {id, isAdmin} = payload as JwtAdminPayload
        if (!id || !isAdmin) {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        // TODO: log a warning
        const admin = await Admin.findById(id)
        if (!admin) {
            res.status(403).json({status: "Unauthorized"})
            return
        }
        req.admin = admin

        next()

    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}
