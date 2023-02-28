import { Request, Response, NextFunction } from "express";
import { RequestWithUser } from "../msc/types";
import Comments from "../models/Comment";
import { createError } from "../handlers/error";

export const addComment = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const newComment = new Comments({
      ...req.body,
      userId: req.user?.id,
    });

    await newComment.save();

    res.status(201).json({
      newComment,
      message: "Comment added successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const comment = await Comments.findById(req.params.id);
    if (!comment) {
      next(createError(404, "Comment not found!"));
    }

    if (comment.userId !== req.user?.id) {
      next(createError(401, "You are not authorized to delete this comment!"));
    }

    await Comments.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Comment deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export const getComments = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const comments = await Comments.find({ videoId: req.params.id }).sort({
      createdAt: -1,
    });

    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

export const updateComment = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const comment = await Comments.findById(req.params.id);
    if (!comment) {
      next(createError(404, "Comment not found!"));
    }

    if (comment.userId !== req.user?.id) {
      next(createError(401, "You are not authorized to update this comment!"));
    }

    const updatedComment = await Comments.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      updatedComment,
      message: "Comment updated successfully!",
    });
  } catch (error) {
    next(error);
  }
};
