
export const queryFilter = (query: Query): QueryFilter => {
    let filter: QueryFilter = {}
    filter.$and = []

    if (query.name) {
        filter['name'] = query.name
    }

    if (query.genre) {
        filter['genre'] = query.genre
    }

    if (query.available) {
        filter['available'] = Boolean(query.available)
    }

    if (query.price_min) {
        filter['$and'].push({price: {$gte: Number(query.price_min)}})
    }

    if (query.price_max) {
        filter['$and'].push({price: {$lte: Number(query.price_max)}})
    }

    return filter
}
