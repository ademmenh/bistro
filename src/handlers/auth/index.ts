
import {User} from './../../db/user'
import {Admin} from './../../db/admin'
import {jwtSign} from './../../utils/jwt'

import { Request, Response} from 'express'



export const postAuthRegister = async (req: Request, res: Response) => {

    try {
        const {name, lastname, username, birthday, gender, email, password} = req.body

        let userFound = await User.findOne({email})

        if (userFound) {
            res.status(422).json({status: 'Unprocessable Content'})
            return
        }

        const user = await User.create({name, lastname, username, birthday, gender, email, password})
        const token = jwtSign({id: (user._id as string), email})
        res.status(200).json({data: user, token})

        return
    } catch (err) {
        console.log(err)
        res.status(500).json({status: "Internal Server Error"})

        return
    }
}


export const postAuthLogIn = async (req: Request, res: Response) => {

    try{
        const {email, password} = req.body
        const user = await User.findOne({email})

        if (!user) {
            res.status(422).json({status: "Unprocessable Content"})
            return
        }

        if (! await user.passwrodMatches(password)) {
            res.status(422).json({status: "Unprocessable Content"})
            return
        }

        const token = jwtSign({id: user._id as string, email})
        res.status(200).json({data: user, token})

        return
    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        console.log(err)
        
        return
    }
}



export const postAuthAdminLogIn = async (req: Request, res: Response) => {

    try {

        const {email, password}= req.body
        const admin = await Admin.findOne({email})

        if (!admin) {
            res.status(422).json({status: "Unprocessable Content"})
            return
        }

        const matches = await admin.passwordMatches(password)
        if (!matches) {
            res.status(422).json({stats: "Unprocessable Content"})
            return
        }

        const token = jwtSign({id: admin._id as string, isAdmin:true})
        res.status(200).json({data: admin, token})
        
        return
    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        console.log(err)

        return
    }
}
