import { MealI, MealQ } from "../../types/meals"



export const getMealsQueryFilter = (query: any) => {

    const filter: MealQ = {}

    if (query.name) {
        filter.name = query.name
    }

    if (query.genre) {
        filter.genre = query.genre
    }

    if (query.available) {
        filter.available = query.available
    }

    if (query.page) {
        filter.page = query.page
    }


    return filter
}


export const patchMealsBodyFilter = (body: any) => {

    const filter: Partial<MealI> = {}

    if (body.name) {
        filter.name = body.name
    }

    if (body.genre) {
        filter.genre = body.genre
    }

    if (body.price) {
        filter.price = body.price
    }

    if (body.available) {
        filter.available = body.available
    }

    if (body.description) {
        filter.description = body.description
    }

    return filter
}
