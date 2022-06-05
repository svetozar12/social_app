import * as express from "express";
import { routes } from "./routes";
import { constants } from "./constants";
import connect from "./config/db_config";
import * as cors from "cors";
import passport = require("passport");
import cookieParser = require("cookie-parser");
import MongoStore = require("connect-mongo");

const app: express.Application = express();

require("./passport")(passport);
connect();

// middlewares
app.use(
  cors({
    origin: constants.CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  require("express-session")({
    secret: "this_is_a_secret",
    resave: true,
    saveUninitialized: true,
    rolling: true, // forces resetting of max age
    cookie: {
      maxAge: 360000,
      secure: false, // this should be true only when you don't want to show it for security reason
      domain: constants.CLIENT_URL,
    },
    store: new MongoStore({
      mongoUrl: constants.DB_STRING,
      collectionName: "session",
    }),
  }),
);
// passport midleware
app.use(passport.initialize());
app.use(passport.session());
require("./passport");

// Application routing
routes(app);

// Start server
app.listen(constants.PORT, () =>
  console.log(
    `Listening on port: http://localhost:${constants.PORT}! in env: ${constants.ENV}`,
  ),
);

export default app;
