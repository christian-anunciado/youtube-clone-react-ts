import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import User from "../models/User";

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = new User(req.body);
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

    const user = await User.findByCredentials?.(name, password, next);

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
