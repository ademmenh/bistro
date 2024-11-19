
import { Request, Response } from "express"
import mongoose from 'mongoose'
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
            res.status(404).json({error: 'Unprocessable Content'})
            return
        }

        const meal = await Meal.findById(mealId)
        if (!meal) {
            res.status(404).json({error: 'Unprocessable Content'})
            return
        }

        const purchase = await Purchase.create({userId, mealId})
        
        res.status(200).json({data: purchase})
        return
    
    } catch (err) {
        if (err instanceof mongoose.mongo.MongoServerError) {
            res.status(422).json({error: "Unprocessable Content"})
        } else {
            res.status(500).json({error: "Internal Server Error"})
        }
    }
}


export const getPurchasesById = async (req: Request, res: Response): Promise<any> => {
    
    try {
        const userId = req.params.userId

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
        let purchases = await Purchase.findByIdAndUpdate(id, filter, {returnDocument: 'after'})
        res.status(200).json({data: purchases})
        return

    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    
    }
}

