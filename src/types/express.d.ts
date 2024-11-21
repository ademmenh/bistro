
import {Request, Response} from 'express'


export interface ParamsI {
    id: string,
    
}

export interface QueryI {
    page?: number,

}

declare interface Req <P = ParamsI, Q = QueryI, B = any>
extends Request <P, {}, B, Q, {}>
{}




declare interface ResponseI <T = any> {
    data?: T,
    status?: string,

}

declare interface Res <R = ResponseI>
extends Response <R, {}>
{}
