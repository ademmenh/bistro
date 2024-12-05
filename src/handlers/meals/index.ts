
// import { MEALS_LIMIT } from '../../config/vars'
import { MEALS_LIMIT } from '../../config/exist'

import { Meal } from './../../db/meal'

import { Request, Response } from 'express'



export const postMeals = async (req: Request, res: Response) => {       
    const {name, genre, price, available, description} = req.body

    try {
        let newMeal = new Meal({name, genre, price, available, description})
        const meal = await newMeal.save()
        console.log({data: meal})
        res.status(200).json({data: meal})

        return

    } catch (err) {
        console.log(err)
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
        console.log(err)
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}


export const getMeals = async (req: Request, res: Response) => {

    try {
        const filter = req.query
        const page = Number(filter.page)
        const skip = page * MEALS_LIMIT
        const meals = await Meal.find().skip(skip).limit(MEALS_LIMIT)
        res.status(200).json({data: meals})
        return

    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        console.log(err)
        return
    }
}


export const patchMealsById = async (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const filter = req.body
        const meal = await Meal.findByIdAndUpdate(id, filter, {returnDocument: 'after'})
        
        if (!meal) {
            res.status(422).json({status: "Unprocessable Content"})
            return            
        }

         res.status(200).json({data: meal})
        return

    } catch (err) {
        res.status(500).json({status: "Internal Server Error"})
        console.log(err)
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
        console.log(err)
        res.status(500).json({status: "Internal Server Error"})
        return
    }
}
