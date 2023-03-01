import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface IReply {
  userId: string;
  commentId: string;
  desc: string;
  likes: string[];
}
// create a mongoose schema for the video
const replySchema = new Schema<IReply>(
  {
    userId: {
      type: String,
      required: true,
    },
    commentId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Reply = mongoose.model<IReply>("Reply", replySchema);

export default Reply;
