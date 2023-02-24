
import jwt from 'jsonwebtoken';
import {createError} from './error'
import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../msc/types';


export const verifyToken = (req:RequestWithUser, res:Response, next: NextFunction) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, 'Access Denied'));

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET as string);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}
