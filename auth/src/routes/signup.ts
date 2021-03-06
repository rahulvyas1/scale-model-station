import express, { Request, Response } from 'express'
import { body } from 'express-validator'
import { BadRequestError, validateRequest } from '@rvticketing/common'
import { User } from './../models/user'
import jwt from 'jsonwebtoken'
import { PaymentCreatedPublisher } from '../events/publishers/user-created-publisher'
import { natsWrapper } from '../nats-wrapper'
const router = express.Router();

router.post("/api/users/signup",
    [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be between 4 and 20 characters')
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        console.log('signup endpoint')
        const { email, password } = req.body;
        console.log(email, password)
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new BadRequestError("Email already in use")
        }

        const user = User.build({ email, password })
        await user.save();


        // Generate JWT

        const userJwt = jwt.sign({
            id: user.id,
            email: user.email
        }, process.env.JWT_KEY!);


        // Store it on session object
        req.session = {
            jwt: userJwt
        };

        console.log("jwt", userJwt)
        await new PaymentCreatedPublisher(natsWrapper.client).publish({
            id: user.id,
            email: user.email
          })

        res.status(201).send(user)
    })

export { router as signupRouter }