
import {Request, Response} from 'express'


interface ResponseI <T = any> {
    data?: T | T[] | null,
    status?: string,

}
