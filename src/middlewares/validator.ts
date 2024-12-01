
import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'


export const validator = (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req)
    // console.log(errors)
    if (!errors.isEmpty()){
        res.status(422).json({status: "Unprocessable Content", errors})
        return
    }
    next();
}
