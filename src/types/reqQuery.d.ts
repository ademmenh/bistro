


declare interface GetQuery {
    name?: string,
    genre?: string,
    available?: boolean,
    price_min?: number,
    price_max?: number,

}

declare interface PutQuery {
    name?: string,
    genre?: string,
    available?: boolean,
    price_min?: number,
    price_max?: number,
    
}

declare interface DeleteQuery {
    name?: string,
    genre?: string,
    price_min?: number,
    price_max?: number,

}
