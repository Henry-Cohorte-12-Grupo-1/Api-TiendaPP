import express, { Application } from "express";
import cookieParser from "cookie-parser";
import config from "./lib/config";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";

import routes from "./routes/index";

require("./passport");

const app: Application = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(
  cors({
    origin: config.cors,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);

export default app;
