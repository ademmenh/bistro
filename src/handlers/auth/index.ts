
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
        const newUser = new User({name, lastname, username, birthday, gender, email, password: hashedPassword})
        const user = await newUser.save()
        console.log('after')
        res.status(200).json({data: user})
        return

    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Internal Server Error"})

    }
}
