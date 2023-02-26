import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import userRouter from "./routes/usersRoute";
import videosRouter from "./routes/videosRoute";
import commentsRouter from "./routes/commentsRoute";
import authController from "./routes/authRoute";
import { ErrorWithStatus } from "./msc/types";

dotenv.config();

const app: Application = express();

const port = process.env.PORT;

const mongoURL = process.env.MONGO_TEST as string;

const connect = async () => {
  try {
    await mongoose.connect(
      mongoURL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      () => {
        console.log("Connected to MongoDB!");
      }
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/videos", videosRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/auth", authController);

app.use(
  (
    err: ErrorWithStatus,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const status = err?.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({
      message,
      status,
      success: false,
    });
  }
);

app.listen(port, () => {
  connect();
  console.log(`Listening to port ${port}...`);
});
