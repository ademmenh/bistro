
import { Request, Response } from 'express'
import { Meal } from './../../db/meal'
import { getMealsQueryFilter, patchMealsBodyFilter } from './filters'


const MEALS_LIMIT = 12    // for pagination

export const postMeals = async (req: Request, res: Response) => {       
    const {name, genre, price, available, description} = req.body

    try {
        let newMeal = new Meal({name, genre, price, available, description})
        const meal = await newMeal.save()
        res.status(200).json({data: meal})
        return

    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}


export const getMealsById = async (req: Request, res: Response) => {

    try {
        let id = req.params.id
        const meal = await Meal.findById(id)
        res.status(200).json({data: meal})
        return

    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}


export const getMeals = async (req: Request, res: Response) => {

    try {
        const filter = getMealsQueryFilter(req.query)
        const page = Number(filter.page)
        const skip = page * MEALS_LIMIT
        const meals = await Meal.find().skip(skip).limit(MEALS_LIMIT)
        res.status(200).json({data: meals})
        return

    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}


export const patchMealsById = async (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const filter = patchMealsBodyFilter(req.body)
        let meal = await Meal.findByIdAndUpdate(id, filter, {returnDocument: 'after'})
         res.status(200).json({data: meal})
        return

    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}


export const deleteMealsById = async (req: Request, res: Response) => {

    try {
        let id = req.params.id
        let meal = await Meal.findByIdAndDelete(id)
        if (!meal) {
            res.status(422).json({status: "Unproccessable Content"})
            return
        }
        res.status(200).json({data: meal})
        return
    
    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}
