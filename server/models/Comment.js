import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a mongoose schema for the video
const commentSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    });


const Comments = mongoose.model('Comments', commentSchema);

export default Comments;
