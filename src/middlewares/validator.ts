
import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'


export const validator = (req: Request, res: Response, next: NextFunction): any => {
    const errors = validationResult(req)
    // console.log(errors)
    if (!errors.isEmpty()){
        return res.status(422).json({error: "Unprocessable Content"})
    }
    next();
}
