

export const getMealsQueryFilter = (query: any) => {
    const filter: any = {}

    if (query.name) {
        filter.name = query.name
    }

    if (query.genre) {
        filter.genre = query.genre
    }

    if (query.available) {
        filter.available = query.available
    }

    if (query.price_min) {
        filter.price_min = query.price_min
    }

    if (query.price_max) {
        filter.price_max = query.price_max
    }

    return filter
}


export const patchMealsBodyFilter = (body: Partial<MealI>): Partial<MealI> => {

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
