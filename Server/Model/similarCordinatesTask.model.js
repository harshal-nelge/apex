import mongoose from "mongoose"

const similarCordinatesTasksSchema = mongoose.Schema({
    longitude:{
        type:String
    },
    latitude:{
        type:String

    },

    task:{
        type:String
    },
    isSimilarWith:{
        type:String
    }

},
{
    timestamps:true
})

export default mongoose.model("similarCordinateTasks", similarCordinatesTasksSchema);
