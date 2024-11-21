
import { QueryI } from "./express";


declare interface MealI {
    name: string,
    genre: string,
    description: string,
    price: string,
    available: string,

}

declare interface MealQ
extends QueryI {
    name?: string,
    genre?: string,
    price_min?: number,
    price_max?: number,
    available?: boolean,

}
