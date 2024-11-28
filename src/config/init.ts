
import {PORT} from './vars'
import {app} from './../'
import { dbConfing } from './db'


export const initServer = async () => {
    try{
        const connected = await dbConfing()
        if (connected) {
            // console.log('Running the Server...')
            app.listen(PORT, () => {
                // console.log(`Server Listen on Port ${PORT} ...`)
            })
        }

    } catch (err){
        // console.log("Server failed to start !")
        // console.log(err)
    
    }
}
