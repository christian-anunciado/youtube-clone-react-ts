// all routes are prefixed with /api/users.

import express from "express";
import { verifyToken } from "../handlers/verifyToken";
import { getByTags, searchVideo } from "../controllers/videosController";
import {
  updateVideo,
  deleteVideo,
  createVideo,
  getVideo,
  getTrendingVideos,
  getSubscriptionsVideos,
  addView,
} from "../controllers/videosController";

const videosRouter = express.Router();

//update Video
videosRouter.put("/:id", verifyToken, updateVideo);

//delete Video
videosRouter.delete("/:id", verifyToken, deleteVideo);

//create Video
videosRouter.post("/", verifyToken, createVideo);

//get Video
videosRouter.get("/find/:id", getVideo);

//update number of views
videosRouter.put("/view/:id", addView);

//get trending videos
videosRouter.get("/trending", getTrendingVideos);

// get subscription videos
videosRouter.get("/subscriptions", verifyToken, getSubscriptionsVideos);

//get random videos
videosRouter.get("/tags", getByTags);

//get user videos
videosRouter.get("/search", searchVideo);

export default videosRouter;
