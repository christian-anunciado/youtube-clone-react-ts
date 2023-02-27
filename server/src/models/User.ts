import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { NextFunction } from "express";
import { createError } from "../handlers/error";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    subscribers: {
      type: Number,
      default: 0,
      min: 0,
    },
    subscribedChannels: {
      type: Number,
      default: 0,
    },
    subscribersUsers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next: NextFunction) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = bcrypt.genSaltSync(
      parseInt(process.env.SALT_ROUNDS as string)
    );

    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

userSchema.statics.findByCredentials = async function (
  name: string,
  password: string,
  next: NextFunction
) {
  // TODO: Find user by name
  const user = await User.findOne({ name });

  if (!user) {
    next(createError(404, "User not found!"));
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    next(createError(401, "Wrong password!"));
  }

  return user;
};

const User = mongoose.model("User", userSchema);

export default User;
