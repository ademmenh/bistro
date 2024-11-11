
declare interface QueryFilter {
    name?: string,
    genre?: string,
    price?: string,
    available?: boolean,
    $and?: {}[],
    $or?: {}[],
}
