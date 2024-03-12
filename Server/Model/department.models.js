import mongoose from "mongoose"

const departmentSchema = mongoose.Schema({
    departmentName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tasks:[
        {
            taskName:{
                type:String,
                required:true
            },
            taskId:{
                type:Number,
                required:true
            },
            
            description:{
                type:String,
            }

        }
    ]

})

export default mongoose.model("departments", departmentSchema);
