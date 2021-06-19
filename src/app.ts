import express, {Application, } from 'express'
import cookieParser from 'cookie-parser';
import config from './lib/config'
import morgan from 'morgan';
import cors from 'cors';
//import session from 'express-session';
import passport from 'passport';
import routes from './routes/index'
import db from './models';
import GOAuthKeys from './config/GOAuthKeys';

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieSession = require("cookie-session");

require('./passport')



const app: Application = express()



app.use(express.json())

app.use(express.urlencoded({extended: true, limit: '50mb'})); //middleware
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(morgan('dev'));

const session = require("express-session"),
    bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

/*app.use(cookieSession({
	// milliseconds of a day
	maxAge: 24*60*60*1000,
	keys:[GOAuthKeys.session.cookieKey]
  }));

//app.use(session({ secret: 'xxxx' }));
app.use(passport.initialize());         // Used to initialize passport
app.use(passport.session());            // Used to persist login sessions*/



app.use(
	cors({
		origin: config.cors,
		credentials: true,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
		allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
	})
);


app.use('/api', routes);


// app.get('/',(req,res)=>{
//     res.send('Hello')
// })

// interface error {
// 	status: number;
// 	message: string;
// }


// app.use((err:error, _req, res) => {
// 	const status = err.status || 500;
// 	const message = err.message || err;
// 	console.error(err);
// 	res.status(status).send(message);
// });



export default app;