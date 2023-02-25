import { Request, Response, NextFunction } from 'express';
import { RequestWithUser } from '../msc/types';
import { createError } from '../handlers/error';
import User from '../models/User';


//update a user
export const updateUser = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    if (req.params.id === req.user?.id) {
        //update
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })

            res.status(200).json({
                user,
                message: 'User updated successfully!'
            });
        } catch (error) {
            next(error)
        }

        
    } else {
        next(createError(403, 'You can update only your account!'))
    }
    
}


//delete User

//getUser

//subscribe user

//unsubscribe

//like

//dislike
