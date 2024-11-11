
declare interface PostBody {
    name: string,
    genre: string,
    price: number,
    available: boolean,

}

declare interface PutBody {
    name?: string,
    genre?: string,
    price?: number,
    available?: boolean,

}
