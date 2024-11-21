
import { Request, Response, NextFunction } from 'express'
import {User} from './../../db/user'
import {Admin} from './../../db/admin'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY as string
const TIME = Number(process.env.TIME) as number



export const postAuthRegister = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    try {
        let client = req.body

        const {name, lastname, username, birthday, gender, email, password} = req.body

        let userFound = await User.findOne({email})

        if (userFound) {
            res.status(400).json({status: 'Unprocessable Content'})
            return

        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, lastname, username, birthday, gender, email, password: hashedPassword})
        
        const token = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: TIME})

        res.status(200).json({data: user, token})
        return

    } catch (err) {
        if (err instanceof mongoose.mongo.MongoServerError) {
            res.status(422).json({status: "Unprocessable Content"})
        } else {
            res.status(500).json({status: "Internal Server Error"})
        }

    }
}


export const postAuthLogIn = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    try{
        const {email, password} = req.body
        const user = await User.findOne({email})

        if (!user) {
            res.status(422).json({status: "Unprocessable Content"})
            return
        }

        if (! await bcrypt.compare(password, user.password)) {
            res.status(422).json({status: "Unprocessable Content"})
            return
        }

        const token = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: TIME})

        res.status(200).json({data: user, token})
        return
    
    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}



export const postAuthAdminLogIn = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    try {

        const {email, password}= req.body
        const admin = await Admin.findOne({email})

        if (!admin) {
            res.status(422).json({status: "Unprocessable Content"})
            return
        }

        if (!await bcrypt.compare(password, admin.password)) {
            res.status(422).json({stats: "Unprocessable Content"})
        }

        const token = jwt.sign({id: admin.id, isAdmin: true}, SECRET_KEY, {expiresIn: TIME})
        res.status(200).json({data: admin, token})
        return
    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}
