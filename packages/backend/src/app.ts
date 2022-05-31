import * as express from "express";
import { routes } from "./routes";
import { constants } from "./constants";
import connect from "./config/db_config";
import * as cors from "cors";
import passport = require("passport");

const app: express.Application = express();
const sessionConfig = {
  secret: "keyboard cat",

  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7, secure: false }, // Remember to set this
};
// middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  }),
);
app.use(require("cookie-parser")());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("express-session")(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
require("./passport");

// Application routing
routes(app);
// psql connection
connect();

// Start server
app.listen(constants.PORT, () =>
  console.log(
    `Listening on port: http://localhost:${constants.PORT}! in env: ${constants.ENV}`,
  ),
);

export default app;
