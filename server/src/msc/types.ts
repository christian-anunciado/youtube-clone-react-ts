import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface ErrorWithStatus extends Error {
    status?: number;
}

export interface RequestWithUser extends Request {
    user?: string | undefined | JwtPayload;
}
