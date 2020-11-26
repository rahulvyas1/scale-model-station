import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler, NotFoundError } from '@rvticketing/common'
import passport from 'passport';
import { googleAuthRouter } from './routes/google-auth';
import { newPostRouter } from './routes/post/new';
import { indexPostsRouter } from './routes/post/index';
import cors from 'cors';
const app = express();

app.use(cors({ origin: 'http://localhost:4200', credentials: true }))
app.set('trust proxy', true);
app.use(json());


app.use(
  cookieSession({
    // signed: false,
    secret: 'foo',
    secure: false
    // secure: process.env.NODE_ENV !== "test"
  })
);
app.use(passport.initialize());
app.use(passport.session());


app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(googleAuthRouter);

app.use(indexPostsRouter);
app.use(newPostRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
