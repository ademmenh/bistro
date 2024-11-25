
import { UserD } from "./../db/user"
// import { AdminD } from '../db/admin'


declare global {
    namespace Express {
        export interface Request {
            user?: UserD,
            // admin?: AdminD
        }
    }
}

interface ResponseI <T = any> {
    data?: T | T[] | null,
    status?: string,

}
