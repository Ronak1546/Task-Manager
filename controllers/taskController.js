import asyncWrapper from "../middleware/asyncWrapper.js";
import { Task } from "../models/taskModels.js";
import { StatusCodes } from "http-status-codes";

export const addTask =asyncWrapper(async(req,res)=>
{ 
        await Task.create(req.body);
        return res.status(StatusCodes.OK).json({msg:"book added successfully"});
    
} );
    //res.send("add Task");

    

export const getTask =async(req,res)=>
    {
        const {id} =req.params;
       const task = await Task.findById(id);//Task table ka name hai or usse hi id find kar rahe hai
       if(task) return res.status(StatusCodes.OK).json(task);
       return res.status(StatusCodes.NOT_FOUND)
       .json({msg:`No book found with id ${id}`});
    
       //res.send("get a Task");
    };
    export const UpdateTask =async(req,res)=>
        {
            try {
             const {id}=req.params;
               const newTask=await Task.findByIdAndUpdate(id,req.body,{returnDocument:"after"});
               res.status(200).json({msg:"book update successfully!",newTask});
             } catch (error) {
                res.status(500).json({error});
         
                
            }
            //res.send("update a Task");
        };
        export const removeTask =async(req,res)=>
            {
               try {
                    console.log(req.params)
                    const{id}= req.params;
                  // const deletedBook =await Task.findByIdAndDelete(id);
                    const deletedTask=await Task.deleteOne({_id:id});
                    //we can delete by id and name also.
                    //find by id and delete will return deleted record as json object 
                    //deleteone will return json object  with {acknowledged :true/false,deletedCount}
            
                    if(deletedTask.deletedCount) return res.status(200).json({msg:"book deleted successfully",deletedTask});
                    res.status(404).json({msg:`book with id: ${id} not found`});
                } catch (error) {
                    res.status(500).json({error});
                    
                } 
                //res.send("remove Task");
            };
            export const showAllTask =async(req,res)=>
                {
               try {
                    const tasks = await Task.find();
                    console.log(tasks);
                    return res.status(StatusCodes.OK).json({length:tasks.length,data:tasks});
                } catch (error) {
                    res.status(500).json({msg:error});  }
                    
                   
              
               // res.send("show alls Task");
            };
            
        
    
