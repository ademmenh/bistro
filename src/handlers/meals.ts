
import {Request, Response} from 'express'
import mongoose from 'mongoose'

import {Meal} from './../db/meal'
import {getFilter, putFilter, deleteFilter} from './../services/queryFilter'


export const postMeals = async (req: Request, res: Response) => {       
    
    try {
        let reqMeal = new Meal(req.body)
        let meal = await reqMeal.save()
        res.status(200).json({data: meal})
        return;

    } catch (err) {
        if (err instanceof mongoose.mongo.MongoServerError) {
            res.status(422).json({error: "Unprocessable Content"})
        } else {
            res.status(500).json({error: "Internal Server Error"})
        }
    }
}


export const getMealsById = async (req: Request, res: Response) => {

    try {
        let id = req.params.id
        let meal = await Meal.findById(id)
        res.status(200).json({data: meal})
        return

    } catch (err) {
        if (err instanceof mongoose.mongo.MongoServerError) {
            res.status(422).json({error: "Unprocessable Content"})
        } else {
            res.status(500).json({error: "Internal Server Error"})
        }
    }
}


export const getMeals = async (req: Request, res: Response) => {

    try {
        let filter = getFilter(req.query)
        let meals = await Meal.find(filter)
        res.status(200).json({data: meals})
        return

    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}


export const putMealsById = async (req: Request, res: Response) => {
    
    try {
        let id = req.params.id
        let meal = await Meal.findByIdAndUpdate(id, req.body, {returnDocument: 'after'})
        res.status(200).json({data: meal})
        return

    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}


export const putMeals = async (req: Request, res: Response) => {
    
    try {
        let filter = putFilter(req.query)
        let message = await Meal.updateMany(filter, req.body)
        res.status(200).json({message: message})
        return

    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}


export const deleteMealsById = async (req: Request, res: Response) => {

    try {
        let id = req.params.id
        let meal = await Meal.findByIdAndDelete(id)
        if (!meal) {
            res.status(422).json({error: "Unproccessable Content"})
            return
        }

        res.status(200).json({data: meal})
        return
    } catch (err) {
        if (err instanceof mongoose.mongo.MongoServerError) {
            res.status(422).json({error: "Unprocessable Content"})
        } else {
            res.status(500).json({error: "Internal Server Error"})
        }
    }
}

export const deleteMeals = async (req: Request, res: Response) => {

    try {
        let filter = deleteFilter(req.query)
        let message = await Meal.deleteMany(filter)
        res.status(200).json({message: message})
        return

    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}
