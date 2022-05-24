import * as passport from "passport";
import { constants } from "./constants";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: constants.GOOGLE_CLIENT_ID,
      clientSecret: constants.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: CallableFunction,
    ) {
      done(null, profile);
    },
  ),
);

passport.use(
  new GitHubStrategy(
    {
      clientID: constants.GITHUB_CLIENT_ID,
      clientSecret: constants.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: CallableFunction,
    ) {
      done(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});
