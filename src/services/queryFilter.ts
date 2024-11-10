


export const getFilter = (query: GetQuery): GetQueryFilter => {
    let filter: GetQueryFilter = {}
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


export const putFilter = (query: PutQuery): PutQueryFilter => {
    let filter: PutQueryFilter = {}
    filter.$and = []

    if (query.name) {
        filter['name'] = query.name
    }

    if (query.genre) {
        filter['genre'] = query.genre
    }

    if (query.available) {
        filter['available'] = query.available
    }

    if (query.price_min) {
        filter['$and'].push({price: {$gte: query.price_min}})
    }

    if (query.price_max) {
        filter['$and'].push({price: {$lte: query.price_max}})
    }

    return filter
}


export const deleteFilter = (query: DeleteQuery): DeleteQueryFilter => {
    let filter: DeleteQueryFilter = {}
    filter.$and = []

    if (query.name) {
        filter['name'] = query.name
    }

    if (query.genre) {
        filter['genre'] = query.genre
    }

    if (query.price_min) {
        filter['$and'].push({price: {$gte: Number(query.price_min)}})
    }

    if (query.price_max) {
        filter['$and'].push({price: {$lte: Number(query.price_max)}})
    }

    return filter
}
