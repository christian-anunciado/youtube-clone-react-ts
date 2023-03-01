// all routes are prefixed with /api/users.

import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  subscribeUser,
  unsubscribeUser,
  likeVideo,
  dislikeVideo,
} from "../controllers/userController";
import { verifyToken } from "../handlers/verifyToken";

const userRouter = express.Router();

//update User
userRouter.put("/:id", verifyToken, updateUser);

//delete User
userRouter.delete("/:id", verifyToken, deleteUser);

//get User
userRouter.get("/find/:id", getUser);

//subscribe user
userRouter.put("/subscribe/:id", verifyToken, subscribeUser);

//unsubscribe user
userRouter.put("/unsubscribe/:id", verifyToken, unsubscribeUser);

//like
userRouter.put("/like/:videoId", verifyToken, likeVideo);

//dislike
userRouter.put("/dislike/:videoId", verifyToken, dislikeVideo);

export default userRouter;
