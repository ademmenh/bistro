


export const getMealsQueryFilter = (body: any) => {

    const filter: GetMealsQueryFilter = {}

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

    if (body.page) {
        filter.page = body.page
    }

    return filter
}


export const patchMealsBodyFilter = (body: any) => {

    const filter: PatchMealsBodyFilter = {}

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
