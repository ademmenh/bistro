


declare interface GetQueryFilter {
    name?: string,
    genre?: string,
    price?: string,
    available?: boolean,
    $and?: {}[],
    $or?: {}[],

}

declare interface PutQueryFilter {
    name?: string,
    genre?: string,
    price?: string,
    available?: boolean,
    $and?: {}[],
    $or?: {}[],
}

declare interface DeleteQueryFilter {
    name?: string,
    genre?: string,
    price?: string,
    $and?: {}[],
    $or?: {}[],
}
