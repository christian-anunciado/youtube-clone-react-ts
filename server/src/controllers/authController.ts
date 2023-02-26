import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { createError } from "../handlers/error";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import User from "../models/User";

const saltRounds = 10;

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (!user) {
      next(createError(404, "User not found!"));
    }

    const isMatch = await bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      next(createError(401, "Wrong password!"));
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1h" }
    );

    const { password: _, ...rest } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
