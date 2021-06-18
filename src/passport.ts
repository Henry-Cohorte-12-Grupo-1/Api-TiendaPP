// archivo donde van a estar todas las estrategias utilizadas con passport
import passport from "passport";
import passportJWT from "passport-jwt";
import passportHttpBearer from "passport-http-bearer";
import db from './models';
import config from './lib/config';

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
      const user = await db.User.findOne({where:{username:payload.username}});
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      console.log(error);
    }
  }));


passport.use('admin',new JWTStrategy(optsAdmin, async (payload, done) => {
    try {
      const user = await db.User.findOne({where:{username:payload.username}});
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      console.log(error);
    }
}));

passport.use(new GoogleStrategy({
  clientID: '1091731383300-fjdl1r5bb2prpvrgnsbeeb84l70ub2ld.apps.googleusercontent.com',
  clientSecret: 'LMQ2TrtFhPi0VCIU8RA5gkk1',
  callbackURL: "/api/auth/google/callback"
},
function(accessToken : any, refreshToken : any, profile : any, cb : any) {  //if succes auth, this gets exec
  console.log(profile);  //this
cb(null,profile);        //and then this callback is like "go next setp with no error (null) and the profile"
}
));

export default passport;
