import express from 'express'
import 'dotenv/config';
import dbConnect from './dbConnect.js';
import cors from 'cors'
import taskRoutes from './routes/taskRoutes.js'
import notFound from './middleware/notFound.js';
const app = express()
//ye routes create karne ke bad
const port = process.env.PORT || 5000;
app.use(cors())

app.get('/',(req,res)=>
    {
        res.send("task manager API");
    })
    app.use(express.json())
app.use("/api/v1/tasks",taskRoutes);
app.use(notFound)
//middleware use karna cha rahe ho

//after env building.
//define and declaring both done at same time.
;(async()=>{
    try {
        
            await dbConnect(process.env.MONGO_URL);
            console.log("database connected successfully...")
            app.listen(port,console.log(`Server is running at port ${port}`));
        }
     catch (error) {
        console.log("error in db connect ...");
        
    }
}
)();


