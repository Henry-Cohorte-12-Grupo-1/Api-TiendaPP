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
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret:  `${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL: "/api/auth/google/callback"
}, 
/*
function(accessToken : any, refreshToken : any, profile : any, done : any) { 
  
  console.log('ENTRO AL CALL BACK AAAAAAAAAAAAA', profile)

  db.User.findOne({ where: { googleId: profile.id }}, async (err: Error, doc: any) => {

    console.log('ENTRO AL FIND BBBBBBBBBBBBBBB')

      if(err){
        return done(err,null);
      }

      if(!doc){
        const newUser = await db.User.create({
          username: profile.id,
          password: profile.id,
          email: profile.emails[0].value,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          googleId: profile.id,
          role: 2,
      })
      return done(null,newUser)
      }

      done(null,doc)
    }
  );*/

async function(accessToken : any, refreshToken : any, profile : any, done : any) {  

  const user = await db.User.findOne({ where: { googleId: profile.id }});

  if (user){
    //console.log('EEEEEEEEEEEEEEE', user.dataValues)
    //console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB')
    return done(null,user)
  } else {
    //console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA Entro al create user')
    const createUser = await db.User.create({
      username: profile.id,
      password: profile.id,
      email: profile.emails[0].value,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      googleId: profile.id,
      role: 2,
  })
  //console.log('USUARIOOOOOOO CREADOOOOOOOOO', createUser)
    return done(null,createUser)
  }
}

));

passport.serializeUser((user: any, done: any) => {
	console.log('CCCCCCCCCCCCCC', user.dataValues.userId)
	 return done(null, user.dataValues.userId);
  });
  
passport.deserializeUser( async (id: any, done: any) => {
	
		const User = await db.findByPK(id)
		if (User){
		  done(null, User)
        } 
  });

export default passport;


/* const userExist = await db.User.findOne({where: {googleId: profile.id}})

    if (userExist){
      return cb(null, userExist)
    } else {
      const createUser = await db.User.create({
        username: req.body.username,
        password: hashedPassword,
        email: profile.emails[0].value,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        googleId: profile.id,
    }) 
    }*/