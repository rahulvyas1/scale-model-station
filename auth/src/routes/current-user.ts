import express from 'express'
import { currentUser, requireAuth } from '@rvticketing/common'
const router = express.Router();

router.get("/api/users/currentuser", currentUser,  (req, res) => {
console.log("req.user",req.user);
    res.send({ currentUser: req.user || null })
})

export { router as currentUserRouter }