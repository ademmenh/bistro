
import { Request, Response, NextFunction } from 'express'
import {User} from './../../db/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY as string

export const postAuthRegister = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    try {

        const {name, lastname, username, birthday, gender, email, password} = req.body

        let userFound = await User.findOne({email})
        // console.log(userFound)
        if (userFound) {
            res.status(400).json({error: 'Unprocessable Content'})
            return

        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, lastname, username, birthday, gender, email, password: hashedPassword})
        
        const token = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: '30d'})
        const BearerToken = `Bearer ${token}`

        res.cookie("token", BearerToken, {httpOnly: true, sameSite: true, secure: true})
        res.status(200).json({data: user})
        return

    } catch (err) {
        if (err instanceof mongoose.mongo.MongoServerError) {
            res.status(422).json({error: "Unprocessable Content"})
        } else {
            res.status(500).json({error: "Internal Server Error"})
        }

    }
}


export const postAuthLogIn = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    try{
        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            res.status(422).json({error: "Unprocessable Content"})
            return
        }

        if (! await bcrypt.compare(password, user.password)) {
            res.status(422).json({error: "Unprocessable Content"})
            return
        }

        const token = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: "30d"})
        // console.log(token)
        res.cookie("token", `Bearer ${token}`, {httpOnly: true, sameSite: true, secure: true})
        res.status(200).json({data: user})
        return
    
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Internal Server Error"})
        return
    }
}
