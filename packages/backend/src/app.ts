import * as express from "express";
import { routes } from "./routes";
import { constants } from "./constants";
import connect from "./config/db_config";
import * as cors from "cors";
require("./passport");
import passport = require("passport");

const app: express.Application = express();

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
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());
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
