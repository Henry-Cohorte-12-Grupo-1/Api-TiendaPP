// archivo donde van a estar todas las estrategias utilizadas con passport
import passport from "passport";
import passportJWT from "passport-jwt";
import passportHttpBearer from "passport-http-bearer";
import db from "./models";
import config from "./lib/config";
import googleIds from "./config/GOAuthKeys";
import twitterIds from "./config/GOAuthKeys";
import facebookIds from "./config/GOAuthKeys";
import gitHubIds from "./config/GOAuthKeys";
import { FRONT_URL } from "./config/url";

const BearerStrategy = passportHttpBearer.Strategy;
const JWTStrategy = passportJWT.Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GitHubStrategy = require("passport-github").Strategy;

const opts: passportJWT.StrategyOptions = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET,
};

const optsAdmin: passportJWT.StrategyOptions = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET_ADMIN,
};

const optsVerification: passportJWT.StrategyOptions = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "key",
};

passport.use(
    new JWTStrategy(opts, async (payload, done) => {
        try {
            const user = await db.User.findOne({
                where: { username: payload.username },
            });
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        } catch (error) {
            console.log(error);
        }
    })
);

passport.use(
    "admin",
    new JWTStrategy(optsAdmin, async (payload, done) => {
        try {
            const user = await db.User.findOne({
                where: { username: payload.username },
            });
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        } catch (error) {
            console.log(error);
        }
    })
);

passport.use(
    "verificationKey",
    new JWTStrategy(optsVerification, async (payload, done) => {
        try {
            const user = await db.User.findOne({
                where: { username: payload.username },
            });
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        } catch (error) {
            console.log(error);
        }
    })
);

// Google OAuth

passport.use(
    new GoogleStrategy(
        {
            clientID: googleIds.googleIds.GOOGLE_CLIENT_ID,
            clientSecret: googleIds.googleIds.GOOGLE_CLIENT_SECRET,
            callbackURL: `${FRONT_URL}/api/auth/google/callback`,
        },
        async function (
            accessToken: any,
            refreshToken: any,
            profile: any,
            done: any
        ) {
            try {
                const user = await db.User.findOne({
                    where: { email: profile.emails[0].value },
                });

                if (user) {
                    return done(null, user.dataValues);
                } else {
                    const createUser = await db.User.create({
                        username: profile.name.givenName,
                        password: profile.id,
                        email: profile.emails[0].value,
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
                        googleId: profile.id,
                        role: 2,
                    });
                    return done(null, createUser.dataValues);
                }
            } catch (error: any) {
                console.log("caught", error.message);
            }
        }
    )
);

passport.serializeUser(async (userId: any, done: any) => {
    try {
        return done(null, userId);
    } catch (error: any) {
        console.log("caught", error.message);
    }
});

passport.deserializeUser(async (id: any, done: any) => {
    try {
        const User = await db.User.findByPk(id);
        if (User) {
            done(null, User);
        }
    } catch (error: any) {
        console.log("caught", error.message);
    }
});

// Twitter Oauth

/*passport.use(new TwitterStrategy({
  consumerKey: twitterIds.twitterIds.TWITTER_CLIENT_ID,
  consumerSecret: twitterIds.twitterIds.TWITTER_CLIENT_SECRET,
  callbackURL: "/api/auth/twitter/callback"
},
  async function (_: any, __: any, profile: any, done: any) {

    try {
      const user = await db.User.findOne({ where: { twitterId: profile.id } });

      if (user) {
        return done(null, user);
      } else {
        const createUser = await db.User.create({
          username: profile.username,
          password: profile.id,
          email: profile.emails[0].value,
          firstName: profile.name.givenName ? profile.name.givenName : 'tuconejo',
          lastName: profile.name.familyName ? profile.name.familyName : 'pepito',
          twitterId: profile.id,
          role: 2,
        });
        return done(null, createUser);
      }
    } catch (error: any) {
      console.log("caught", error.message);
    }

  }
));*/

// GitHub OAuth

passport.use(
    new GitHubStrategy(
        {
            clientID: gitHubIds.gitHubIds.GITHUB_CLIENT_ID,
            clientSecret: gitHubIds.gitHubIds.GITHUB_CLIENT_SECRET,
            callbackURL: `${FRONT_URL}/api/auth/github/callback`,
        },
        async function (
            accessToken: any,
            refreshToken: any,
            profile: any,
            done: any
        ) {
            const user = await db.User.findOne({
                where: { email: profile._json.email },
            });

            if (user) {
                return done(null, user);
            } else {
                const createUser = await db.User.create({
                    username: profile._json.login,
                    password: profile.id,
                    email: profile._json.email
                        ? profile._json.email
                        : "noemail@aemail.com",
                    firstName: profile._json.login,
                    lastName: profile._json.login,
                    gitHubId: profile._json.id.toString(),
                    role: 2,
                });
                return done(null, createUser);
            }
        }
    )
);

export default passport;
