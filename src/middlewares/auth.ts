
import { User } from './../db/user'
import { Admin } from '../db/admin'
import { Request, Response, NextFunction } from 'express'
import { jwtVerify } from '../utils/jwt'




export const isUser = async (req: Request, res: Response, next: NextFunction) => {

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


        const {id, email} = jwtVerify(token) as JwtUserPayload
        // TODO: log a warning
        if (!id || !email) {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        const user = await User.findById(id)
        console.log(typeof user)
        // TODO: log a warning
        if (!user) {
            res.status(403).json({status: "Unauthorized"})
            return

        }
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

        const {id, isAdmin} = jwtVerify(token) as JwtAdminPayload
        // TODO: log a warning
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
        // req.admin = admin

        next()

    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}
