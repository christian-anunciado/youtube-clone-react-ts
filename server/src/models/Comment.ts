import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface IComments {
  userId: string;
  videoId: string;
  description: string;
  likes: string[];
  dislikes: string[];
  replies: string[];
  score: number;
}
// create a mongoose schema for the video
const commentSchema = new Schema<IComments>(
  {
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
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
    replies: {
      type: [String],
      default: [],
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model<IComments>("Comments", commentSchema);

export default Comments;
