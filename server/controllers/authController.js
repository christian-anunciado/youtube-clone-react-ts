import mongoose from 'mongoose'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import { createError } from '../handlers/error.js';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

export const signUp = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash })
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        // TODO
        next(error)
    }
}

export const signin = async (req, res, next) => {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({ name });
        if (!user) {
            next(createError(404, 'User not found!'))
        }

        const isMatch = await bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            next(createError(401, 'Wrong password!'))
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        const { password: _, ...rest } = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(rest)

    } catch (error) {

    }
}

