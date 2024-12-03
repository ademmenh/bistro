
import { Request, Response } from "express"
import {Meal} from './../../db/meal'
import {UserD} from './../../db/user'
import {Purchase} from '../../db/purchase'



export const postPurchases = async (req: Request, res: Response) => {
    
    const params = req.params
    try {
        const {mealId} = req.body
        const userId = (req.user as UserD)._id

        const meal = await Meal.findById(mealId)
        if (!meal) {
            res.status(422).json({status: 'Unprocessable Content'})
            return
        }

        const purchase = await Purchase.create({userId, mealId})
        res.status(200).json({data: purchase})
        return
    
    } catch (err) {
        console.log(err)
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}


export const getPurchases = async (req: Request, res: Response) => {
    
    try {
        const userId = (req.user as UserD)._id
        let purchases = await Purchase.find({userId})
        res.status(200).json({data: purchases})
        return

    } catch (err) {
        console.log(err)
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}



export const patchPurchasesById = async (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const filter = req.body.completed
        const purchase = await Purchase.findByIdAndUpdate(id, {completed: filter}, {returnDocument: 'after'})
        // console.log("purchase:" + purchase)
        res.status(200).json({data: purchase})
        // console.log('after 200 ok')
        return

    } catch (err) {
        console.log("err:", err)
        res.status(500).json({error: "Internal Server Error"})
        return
        
    }
}

