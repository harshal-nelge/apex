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
           
           
            description:{
                type:String,
            },
            taskLongitude:{
                type:String,
                required:true
            },
            taskLatitude:{
                type:String,
                required:true
            },


            
            underGroundInfrastructure:{
                type:Boolean,
                default:false
            },
            roadWork:{
                type:Boolean,
                default:false
            },
            publicSpaceEnhacement:{
                type:Boolean,
                default:false
            },
            underWaterConstruction:{
                type:Boolean,
                default:false
            },
           
            demolition:{
                type:Boolean,
                default:false
            },
            greenInfrastructureProject:{
                type:Boolean,
                default:false
            },
            electricalServices:{
                type:Boolean,
                default:false
            },
            

        }
    ]

},{
    timestamps:true
})

export default mongoose.model("departments", departmentSchema);
