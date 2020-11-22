import express, { Request, Response } from 'express'
import { body } from 'express-validator'
import { BadRequestError, validateRequest } from '@rvticketing/common'
import { User } from '../../models/user'
import { natsWrapper } from '../../nats-wrapper'
import { Post } from '../../models/post'
import { nanoid } from 'nanoid'
const router = express.Router();

router.post("/api/posts/new",
    [
        body('title')
            .isLength({ min: 4, max: 50 })
            .withMessage('Title must be valid')
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        console.log('New Post Endpoint')
        const { title, description = "", photos = [] } = req.body;
        console.log(title, description, photos);

        //@ts-ignore
        const user = await User.findOne({ $or: [{ googleId: req.user!.id }], });
        console.log("user", user);
        if(!user){
            throw new Error("User not found!");
        }
        const post = Post.build({ title, description: description || "", photos, user: user, postId: nanoid() })
        await post.save();
        res.status(201).send(post)
    })

export { router as newPostRouter }