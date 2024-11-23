
import { Request, Response } from "express"
import {Meal} from './../../db/meal'
import {UserD} from './../../db/user'
import {Purchase} from '../../db/purchase'



export const postPurchases = async (req: Request, res: Response) => {
    
    console.log("entered purchases")
    const params = req.params
    try {
        const {mealId} = req.body
        const userId = (req.user as UserD)._id

        const meal = await Meal.findById(mealId)
        if (!meal) {
            res.status(404).json({status: 'Unprocessable Content'})
            return
        }
        // console.log(meal)

        const purchase = await Purchase.create({userId, mealId})
        // console.log(purchase)
        res.status(200).json({data: purchase})
        return
    
    } catch (err) {
        console.log(err)
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}


export const getPurchasesById = async (req: Request, res: Response) => {
    
    try {
        const userId = req.params.userId
        let purchases = await Purchase.find({userId})
        res.status(200).json({data: purchases})
        return

    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
        return
    }
}


export const patchPurchasesById = async (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const filter = req.body.completed
        const purchases = await Purchase.findByIdAndUpdate(id, filter, {returnDocument: 'after'})
        res.status(200).json({data: purchases})
        return

    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
        return
        
    }
}

