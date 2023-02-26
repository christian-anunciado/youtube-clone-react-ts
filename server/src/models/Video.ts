
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create a mongoose schema for the video
const videoSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    },
    tags: {
        type: [String],
        default: [],
    }
},
    {
        timestamps: true,
    });


const Video = mongoose.model('Video', videoSchema);

export default Video;
