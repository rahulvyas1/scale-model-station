import express, { Request, Response } from 'express';
import { requireAuth, currentUser } from '@rvticketing/common';
import {Post} from '../../models/post'
const router = express.Router();

router.get(
    "/api/posts",
    async (req: Request, res: Response) => {
        const posts = await Post.find().sort([['_id', -1]]).limit(30).populate('user');
        res.send(posts)
    })


export { router as indexPostsRouter }