// archivo donde van a estar todas las estrategias utilizadas con passport
import passport from "passport";
import passportJWT from "passport-jwt";
import passportHttpBearer from "passport-http-bearer";
import db from './models';
import config from './lib/config';
import { doesNotMatch } from "assert";

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const BearerStrategy = passportHttpBearer.Strategy;
const JWTStrategy = passportJWT.Strategy

const opts: passportJWT.StrategyOptions = {
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET
};

const optsAdmin: passportJWT.StrategyOptions = {
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET_ADMIN
};

passport.use(new JWTStrategy(opts, async (payload, done) => {
  try {
    const user = await db.User.findOne({ where: { username: payload.username } });
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
}));


passport.use('admin', new JWTStrategy(optsAdmin, async (payload, done) => {
  try {
    const user = await db.User.findOne({ where: { username: payload.username } });
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
}));




passport.use(new GoogleStrategy({
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL: "/api/auth/google/callback"
},
  async function (accessToken: any, refreshToken: any, profile: any, done: any) {

    const user = await db.User.findOne({ where: { googleId: profile.id } });

    if (user) {
      return done(null, user.dataValues.userId)
    } else {
      const createUser = await db.User.create({
        username: profile.id,
        password: profile.id,
        email: profile.emails[0].value,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        googleId: profile.id,
        role: 2,
      })
      return done(null, createUser.dataValues.userId)
    }
  }

));

passport.serializeUser(async (userId: any, done: any) => {
  try {
    //console.log('CCCCCCCCCCCCCC', userId)
    return done(null, userId);
  }
  catch (error: any) {
    console.log("caught", error.message);
  }
});

passport.deserializeUser(async (id: any, done: any) => {
  try {
    //console.log('FFFFFFFFFFFFFFFFFFFFFFFFFF', id)
    const User = await db.User.findByPk(id)
    if (User) {
      done(null, User)
    }
  }
  catch (error: any) {
    console.log("caught", error.message);
  }
});

export default passport;