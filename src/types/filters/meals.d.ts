
declare interface GetMealsQueryFilter {
    name?: string,
    genre?: string,
    price?: string,
    available?: boolean,
    page?: number,

}

declare interface PatchMealsBodyFilter {
    name?: string,
    genre?: string,
    price?: string,
    available?: boolean,
    description?: string,

}
