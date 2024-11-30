
import {PORT} from './vars'
import { dbConfing } from './db'
import { Application } from 'express'


export const initServer = async (app: Application): Promise<void> => {
    try{
        const connected = await dbConfing()
        if (connected) {
            console.log('Running the Server...')
            app.listen(PORT, () => {
                console.log(`Server Listen on Port ${PORT} ...`)
            })
        }

    } catch (err){
        console.log("Server failed to start !")
        console.log(err)
    
    }
}
