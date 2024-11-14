
import { Request, Response } from "express"
import mongoose from 'mongoose'
import {Purchase} from './../../db/purchase'



export const postPurchases = async (req: Request, res: Response): Promise<any> => {

    try {
        const {userId, mealId, completed} = req.body
        
        const user = await Purchase.findById(userId)
        if (!userId) {
            res.status(404).json({error: 'Unprocessable Content'})
        }

        const meal = await Purchase.findById(mealId)
        if (mealId) {
            res.status(404).json({error: 'Unprocessable Content'})
        }

        const reqpurchase = new Purchase({userId, mealId, completed})
        let purchase = await reqpurchase.save()
        res.status(200).json({data: purchase})
        return
    
    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}


export const getPurchasesById = async (req: Request, res: Response): Promise<any> => {
    
    try {
        const userId = req.params.id

        let purchases = await Purchase.find({userId})
        res.status(200).json({data: purchases})
        return

    } catch (err) {
        if (err instanceof mongoose.mongo.MongoServerError) {
            res.status(422).json({error: "Unprocessable Content"})
        } else {
            res.status(500).json({error: "Internal Server Error"})
        }
    }
}


export const patchPurchasesById = async (req: Request, res: Response): Promise<any> => {

    try {
        let id = req.params.id
        let filter = req.body.completed
        console.log('before')
        let purchases = await Purchase.findByIdAndUpdate(id, filter, {returnDocument: 'after'})
        console.log(purchases)
        console.log('after')
        res.status(200).json({data: purchases})
        return

    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Internal Server Error"})
    
    }
}

