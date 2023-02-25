// all routes are prefixed with /api/users.


import express from 'express';
import { updateUser } from '../controllers/userController';

const userRouter = express.Router();

//update User
userRouter.put('/:id', updateUser)

//delete User


export default userRouter;
