
import { Request, Response, NextFunction } from 'express'
import {User} from './../../db/user'
import bcrypt from 'bcrypt'

export const postAuthRegister = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    try {

        const {name, lastname, username, birthday, gender, email, password} = req.body

        let userFound = await User.findOne({email})
        if (userFound) {
            res.status(400).json({error: 'Unprocessable Content'})
            return

        }

        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)
        const user = await User.create({name, lastname, username, birthday, gender, email, password: hashedPassword})
        res.status(200).json({data: user})
        return

    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Internal Server Error"})

    }
}


export const postAuthLogIn = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    try{
        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            res.status(422).json({error: "Internal Server Error"})
            return
        }

        res.status(200).json({data: user})
        return
    
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Internal Server Error"})
        return

    }
}
