import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface IVideo {
  userId: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  views: number;
  likes: string[];
  dislikes: string[];
  tags: string[];
}

// create a mongoose schema for the video
const videoSchema = new Schema<IVideo>(
  {
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
    },
  },
  {
    timestamps: true,
  }
);

const Video = mongoose.model<IVideo>("Video", videoSchema);

export default Video;
