
import {Request, Response} from 'express'
import mongoose from 'mongoose'

import {Meal} from './../db/meal'
import {bodyFilter} from './../utils/filters'


export const postMeals = async (req: Request, res: Response) => {       
    
    try {
        let reqMeal = new Meal(req.body)
        let meal = await reqMeal.save()
        res.status(200).json({data: meal})
        return;

    } catch (err) {
        console.log(Object.getPrototypeOf(err))
        if (err instanceof mongoose.mongo.MongoServerError) {
            res.status(422).json({error: "Unprocessable Content"})
        } else {
            res.status(500).json({error: "Internal Server Error"})
        }
    }
}


export const getMealsById = async (req: Request, res: Response) => {

    try {
        let id = Number(req.params.id)
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
        let filter = bodyFilter(req.body)
        console.log(filter)
        let meals = await Meal.find(filter)
        console.log(meals)
        res.status(200).json({data: meals})
        return

    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}


