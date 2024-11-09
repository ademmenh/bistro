
export const bodyFilter = (body: Filter) => {

    const filter: any = {}

    if (body.name) {
        filter['name'] = body.name
    }

    if (body.genre) {
        filter['genre'] = body.genre
    }

    if (body.available) {
        filter['available'] = body.available
    }

    if (body.price.minp && body.price.maxp) {
        filter['$and'] = {price: {$gte: body.price.minp, $lte: body.price.maxp}}
    }

    return filter
}
