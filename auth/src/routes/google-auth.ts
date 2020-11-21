import passport from 'passport';
import express from 'express'
import { User } from './../models/user'
var userProfile: any;

const router = express.Router();

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '6402390439-avcf9secjuulb77bt7k6i6sf5hn8vttv.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'lN94VRHGj8LDvk5Zh-4JqMLb';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:32694/auth/google/callback"
},
    async function (accessToken: any, refreshToken: any, profile: any, done: any) {

        // console.log("accessToken", accessToken);
        // console.log("refreshToken", refreshToken);
        // console.log("profile", profile);
        const existinguser = await User.findOne({ googleId: profile.id });
        console.log("existinguser", existinguser)
        if (!existinguser) {
            const user = User.build({
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0]?.value,
                picture: profile.photos[0]?.value,
                googleId: profile.id
            })
            await user.save();
            console.log("saved user", user)
        }


        userProfile = profile;
        return done(null, userProfile);
    }
));

router.get('/success2', (req, res) => {
    console.log("req.user2",req.user)
    // console.log("req.session",req.session)
    return res.send({})
});
router.get('/success', (req, res) => {
    console.log("req.user",req.user)
    // console.log("req.session",req.session)
    return res.send(userProfile)
});

router.get('/error', (req, res) => res.send("error logging in"));

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/error' }),
    function (req, res) {
        // Successful authentication, redirect success.
        res.redirect('/success');
    });

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});


export { router as googleAuthRouter }


