
interface Filter {
    name?: string,
    genre?: string,
    available?: boolean,
    price: {minp: number, maxp: number},
}
