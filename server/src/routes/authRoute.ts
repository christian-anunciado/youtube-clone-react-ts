// all routes are prefixed with /api/users.

import { signin, signUp } from "../controllers/authController";

import express from "express";

const authController = express.Router();

// create a new user
authController.post("/signup", signUp);

// login
authController.post("/signin", signin);

// google login
authController.post("/google");

export default authController;
