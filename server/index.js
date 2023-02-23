import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/usersRoute.js';
import videosRouter from './routes/videosRoute.js';
import commentsRouter from './routes/commentsRoute.js';
import authController from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

const app = express();


const port = 3000;

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO_TEST, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connected to MongoDB!');
    });
};

app.use(cookieParser())
app.use(express.json());
app.use("/api/users", userRouter)
app.use("/api/videos", videosRouter)
app.use("/api/comments", commentsRouter)
app.use("/api/auth", authController)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    res.status(status).json({
        message,
        status,
        success: false,
    });

});

app.listen(port, () => {
    connect();
    console.log(`Listening to port ${port}...`);
});





