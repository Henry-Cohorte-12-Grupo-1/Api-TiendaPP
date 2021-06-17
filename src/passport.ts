// archivo donde van a estar todas las estrategias utilizadas con passport
import passport from "passport";
import passportJWT from "passport-jwt";
import passportHttpBearer from "passport-http-bearer";
import db from './models';

const BearerStrategy = passportHttpBearer.Strategy;
const JWTStrategy = passportJWT.Strategy

const opts: passportJWT.StrategyOptions = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Clave_secreta'
  };

const optsAdmin: passportJWT.StrategyOptions = {
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Clave_secreta_admin'
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

export default passport;
