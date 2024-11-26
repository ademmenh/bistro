
import { Request, Response, NextFunction } from "express"


export const getMealsQueryFilter = (req: Request, res: Response, next: NextFunction): void => {
    const filter: any = {}

    if (req.query.name) {
        filter.name = req.query.name
    }

    if (req.query.genre) {
        filter.genre = req.query.genre
    }

    if (req.query.available) {
        filter.available = req.query.available
    }

    if (req.query.price_min) {
        filter.price_min = req.query.price_min
    }

    if (req.query.price_max) {
        filter.price_max = req.query.price_max
    }

    req.query = filter

    next()
}


export const patchMealsBodyFilter = (req: Request, res: Response, next: NextFunction): void => {

    const filter: any = {}

    if (req.body.name) {
        filter.name = req.body.name
    }

    if (req.body.genre) {
        filter.genre = req.body.genre
    }

    if (req.body.price) {
        filter.price = req.body.price
    }

    if (req.body.available) {
        filter.available = req.body.available
    }

    if (req.body.description) {
        filter.description = req.body.description
    }

    req.query = filter
    
    next()
}
