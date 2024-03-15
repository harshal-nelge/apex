import mongoose from "mongoose";

const similarCordinatesTasksSchema = mongoose.Schema({
    longitude: {
        type: String
    },
    latitude: {
        type: String
    },
    task: {
        type: mongoose.Schema.Types.Mixed  // Change the type to allow storing objects
    },
    isSimilarWith: {
        type: mongoose.Schema.Types.Mixed  // Change the type to allow storing objects
    }
},
{
    timestamps: true
});

export default mongoose.model("similarCordinateTasks", similarCordinatesTasksSchema);
