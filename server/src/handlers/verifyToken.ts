
import jwt from 'jsonwebtoken';
import {createError} from './error'
import { NextFunction, Response } from 'express';
import { RequestWithUser, SignedToken } from '../msc/types';

function verifyDecodedToken (decodedToken: unknown): asserts decodedToken is SignedToken {
    if (!(decodedToken instanceof Object)) {
        throw new Error('Invalid Token. Token must be an object');
    }
    if (!('id' in decodedToken)) {
        throw new Error('Invalid Token. Missing required property "id"');
    }
    if (!(typeof decodedToken.id === 'string')) {
        throw new Error('Invalid Token. Property "id" must be a string');
    }

}

export const verifyToken = (req:RequestWithUser, res:Response, next: NextFunction) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, 'Access Denied'));

    try {
        const verified: unknown = jwt.verify(token, process.env.TOKEN_SECRET as string);
        verifyDecodedToken(verified);
        req.user = { id: verified.id };
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}

