
import { Request, Response } from 'express'
import { Meal, MealD } from './../../db/meal'
import { getMealsQueryFilter, patchMealsBodyFilter } from './filters'


const MEALS_LIMIT = 12    // for pagination

export const postMeals = async (req: Request, res: Response) => {       
    const {name, genre, price, available, description} = req.body

    try {
        let newMeal = new Meal({name, genre, price, available, description})
        const meal: MealD = await newMeal.save()
        return res.status(200).json({data: meal})

    } catch (err) {
        return res.status(500).json({status: "Internal Server Error"})
    }
}


export const getMealsById = async (req: Request, res: Response) => {

    try {
        let id = req.params.id
        const meal = await Meal.findById(id)
        return res.status(200).json({data: meal})
        
    } catch (err) {
        return res.status(500).json({status: "Internal Server Error"})
    }
}


export const getMeals = async (req: Request, res: Response) => {

    try {
        const filter = getMealsQueryFilter(req.query)
        const page = Number(filter.page)
        const skip = page * MEALS_LIMIT
        const meals = await Meal.find().skip(skip).limit(MEALS_LIMIT)
        return res.status(200).json({data: meals})

    } catch (err) {
        return res.status(500).json({status: "Internal Server Error"})
    }
}


export const patchMealsById = async (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const filter = patchMealsBodyFilter(req.body)
        let meal = await Meal.findByIdAndUpdate(id, filter, {returnDocument: 'after'})
        return res.status(200).json({data: meal})

    } catch (err) {
        return res.status(500).json({status: "Internal Server Error"})
    }
}


export const deleteMealsById = async (req: Request, res: Response) => {

    try {
        let id = req.params.id
        let meal = await Meal.findByIdAndDelete(id)
        if (!meal) {
            return res.status(422).json({status: "Unproccessable Content"})
        }
        return res.status(200).json({data: meal})
    
    } catch (err) {
        return res.status(500).json({status: "Internal Server Error"})
    }
}
