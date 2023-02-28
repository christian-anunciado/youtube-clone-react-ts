// all routes are prefixed with /api/comments.

import express from "express";
import { verifyToken } from "../handlers/verifyToken";
import {
  addComment,
  deleteComment,
  getComments,
  updateComment,
} from "./../controllers/commentsController";

const commentsRouter = express.Router();

//add Comment
commentsRouter.post("/", verifyToken, addComment);

//delete Comment
commentsRouter.delete("/:id", verifyToken, deleteComment);

//get Comment
commentsRouter.get("/:id", getComments);

//update Comment
commentsRouter.put("/:id", verifyToken, updateComment);

export default commentsRouter;
