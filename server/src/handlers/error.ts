import { ErrorWithStatus } from '../msc/types';

export const createError = (statusCode: number, message: string) => {
    const error = new Error(message) as ErrorWithStatus;
    error.status = statusCode;
    return error;
};
