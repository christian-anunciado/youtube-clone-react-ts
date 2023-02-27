import { Request } from "express";
import User from "../models/User";

export interface ErrorWithStatus extends Error {
  status?: number;
}

export interface RequestWithUser extends Request {
  user?: SignedToken;
}

export interface Token {
  id: string;
  iat: number;
  exp: number;
}

export type SignedToken = Partial<Token>;

export type LoginParams = {
  name: string;
  password: string;
};
