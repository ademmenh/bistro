
import {Request, Response} from 'express'
import mongoose from 'mongoose'

import {Meal} from './../../db/meal'
import { getMealsQueryFilter, patchMealsBodyFilter } from '../../utils/filters/mealsfilters'




export const postMeals = async (req: Request, res: Response) => {       
    const {name, genre, price, available, description} = req.body

    try {
        let newMeal = new Meal({name, genre, price, available, description})
        let meal = await newMeal.save()
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


const LIMIT = 12    // for pagination
export const getMeals = async (req: Request, res: Response) => {

    try {
        let filter = getMealsQueryFilter(req.query)
        let page = Number(filter.page)
        let skip = page * LIMIT
        let meals = await Meal.find().skip(skip).limit(LIMIT)
        res.status(200).json({data: meals})
        return

    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}


export const patchMealsById = async (req: Request, res: Response) => {

    try {
        const {name, genre, price, available, description } = req.body
        console.log(req.body)
        let id = req.params.id
        let filter = patchMealsBodyFilter({name, genre, price, available, description})
        let meal = await Meal.findByIdAndUpdate(id, filter, {returnDocument: 'after'})
        console.log('after')
        console.log(meal)
        res.status(200).json({data: meal})
        return

    } catch (err) {
        // console.log(err)
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
