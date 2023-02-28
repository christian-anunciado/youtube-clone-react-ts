import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface IComments {
  userId: string;
  videoId: string;
  description: string;
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
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model<IComments>("Comments", commentSchema);

export default Comments;
