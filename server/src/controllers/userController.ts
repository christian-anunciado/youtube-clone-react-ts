import { Request, Response, NextFunction } from "express";
import { RequestWithUser } from "../msc/types";
import { createError } from "../handlers/error";
import User from "../models/User";

//update a user
export const updateUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.params.id === req.user?.id) {
    //update
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      res.status(200).json({
        user,
        message: "User updated successfully!",
      });
    } catch (error) {
      next(error);
    }
  } else {
    next(createError(403, "You can update only your account!"));
  }
};

//delete User
export const deleteUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.params.id === req.user?.id) {
    //update
    try {
      await User.findByIdAndDelete(req.params.id);

      res.status(200).json({
        message: "Account deleted!",
      });
    } catch (error) {
      next(error);
    }
  } else {
    next(createError(403, "You can only delete your account!"));
  }
};

//getUser
export const getUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const findUser = await User.findById(req.params.id);

    res.status(200).json(findUser);
  } catch (error) {
    next(createError(404, "User not found!"));
  }
};

//subscribe user
export const subscribeUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (!(req.params.id === req.user?.id)) {
    try {
      await User.findByIdAndUpdate(req.user?.id, {
        $push: { subscribersUsers: req.params.id },
      });

      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: 1 },
      });

      res.status(200).json({
        message: "User subscribed successfully!",
      });
    } catch (error) {
      next(error);
    }
  } else {
    next(createError(403, "You can't subscribe to yourself!"));
  }
};

//unsubscribe
export const unsubscribeUser = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (!(req.params.id === req.user?.id)) {
    try {
      await User.findByIdAndUpdate(req.user?.id, {
        $pull: { subscribersUsers: req.params.id },
      });

      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: -1 },
      });

      res.status(200).json({
        message: "User unsubscribed successfully!",
      });
    } catch (error) {
      next(error);
    }
  } else {
    next(createError(403, "You can't unsubscribe from yourself!"));
  }
};

//like
export const like = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {};

//dislike
export const dislike = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {};
