import mongoose from "mongoose"

const similarCordinatesTasksSchema = mongoose.Schema({

    task:{
        type:String
    },
    isSimilarWith:{
        type:String
    }

},{
    timestamps:true
})

export default mongoose.model("similarCordinateTasks", similarCordinatesTasksSchema);
