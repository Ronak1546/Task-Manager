import mongoose from "mongoose";
const taskSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"],
        trim:true,
        maxlength:[20,"name cannot be more than 20 characters"],
    },
    completed:{
        type:Boolean,
        default:false,
    },
},
   { 
    timestamp:true,
}
);
export const Task = mongoose.model('Task',taskSchema);//table name task
//iske bad routes ma jana hai