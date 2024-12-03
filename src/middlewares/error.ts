
import { Request, Response } from "express"

export const errMiddleware = (err: Error, req: Request, res: Response) => {
    console.log("err: "+ err)
    res.status(500).json({status: "internal Server Error!"})
    return
}
