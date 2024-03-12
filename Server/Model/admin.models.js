import mongoose from "mongoose"

const adminSchema = mongoose.Schema({
    adminName:{
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
    

})

export default mongoose.model("admins", adminSchema);
