import { NextFunction, Request, Response } from "express";
import { RequestWithUser } from "../msc/types";
import Video from "../models/Video";
import { createError } from "../handlers/error";
import User from "../models/User";

export const createVideo = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const newVideo = new Video({ ...req.body, userId: req.user?.id });

    await newVideo.save();

    res.status(201).json(newVideo);
  } catch (error) {
    next(error);
  }
};

export const getVideo = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const getVideo = await Video.findById(req.params.id);
    res.status(200).json(getVideo);
  } catch (error) {
    next(error);
  }
};

export const updateVideo = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const getVideo = await Video.findById(req.params.id);

    if (!getVideo) return next(createError(404, "Video not found!"));

    if (getVideo?.userId === req.user?.id) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({
        updatedVideo,
        message: "Video updated successfully!",
      });
    } else {
      return next(createError(403, "You can update only your videos!"));
    }
  } catch (error) {
    next(error);
  }
};

export const deleteVideo = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const getVideo = await Video.findById(req.params.id);
    if (!getVideo) return next(createError(404, "Video not found!"));
    if (getVideo?.userId === req.user?.id) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "Video deleted!",
      });
    } else {
      next(createError(403, "You can delete only your videos!"));
    }
  } catch (error) {
    next(error);
  }
};

export const getTrendingVideos = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const getTrendingVids = await Video.find()
      .sort({ views: -1 })
      .sort({ createdAt: -1 })
      .limit(40);

    res.status(200).json(getTrendingVids);
  } catch (error) {
    next(error);
  }
};

export const getSubscriptionsVideos = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(req.user?.id);

    const getSubscribersUsers = user.subscribersUsers;

    const list = await Promise.all(
      getSubscribersUsers.map((channelId: string) => {
        return Video.find({ userId: channelId });
      })
    );

    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (error) {
    next(error);
  }
};

export const getRandomVideos = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const randomVideos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(randomVideos);
  } catch (error) {
    next(error);
  }
};

export const getUserVideos = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {};

export const addView = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const getVideo = await Video.findById({ title: req.params.title });

    if (!getVideo) return next(createError(404, "Video not found!"));

    await Video.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { views: 1 },
      },
      { new: true }
    );

    res.status(200).json("Video viewed!");
  } catch (error) {
    next(error);
  }
};

export const getByTags = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const query: string[] = (req.query?.tags as string).split(","); // ['music', 'gaming', 'funny']
  try {
    const getVideosByTags = await Video.find({
      tags: { $in: query },
    }).limit(20);

    res.status(200).json(getVideosByTags);
  } catch (error) {
    next(error);
  }
};

export const searchVideo = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const query: string = req.query?.q as string;

  try {
    const searchVideo = await Video.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);

    res.status(200).json(searchVideo);
  } catch (error) {
    next(error);
  }
};
