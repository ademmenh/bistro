
import { Request, Response } from "express"
import {Meal} from './../../db/meal'
import {User} from './../../db/user'
import {Purchase} from '../../db/purchase'



export const postPurchases = async (req: Request, res: Response): Promise<any> => {

    const params = req.params
    try {
        const {userId, mealId} = req.body
        const date = new Date()
        
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({error: 'Unprocessable Content'})
        }

        const meal = await Meal.findById(mealId)
        if (!meal) {
            return res.status(404).json({error: 'Unprocessable Content'})
        }

        const purchase = await Purchase.create({userId, mealId})
        
        return res.status(200).json({data: purchase})
    
    } catch (err) {
        return res.status(500).json({error: "Internal Server Error"})
    }
}


export const getPurchasesById = async (req: Request, res: Response): Promise<any> => {
    
    try {
        const userId = req.params.userId

        let purchases = await Purchase.find({userId})
        return res.status(200).json({data: purchases})

    } catch (err) {
        return res.status(500).json({error: "Internal Server Error"})
    }
}


export const patchPurchasesById = async (req: Request, res: Response): Promise<any> => {

    try {
        const id = req.params.id
        const filter = req.body.completed
        const purchases = await Purchase.findByIdAndUpdate(id, filter, {returnDocument: 'after'})
        return res.status(200).json({data: purchases})

    } catch (err) {
        return res.status(500).json({error: "Internal Server Error"})
    
    }
}

