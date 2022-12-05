import { AppDataSource } from "./data-source"
import express  from "express"
import { routes } from "./router"

 AppDataSource.initialize()
 .then(async ()=> {

    const app = express()

        app.use(routes)
   

 
    app.listen(3000, () => {
        console.log("listem 3000");
        
    })



 })

   

