import * as passport from "passport";
import { constants } from "./constants";
var GoogleStrategy = require("passport-google-oauth20").Strategy;
console.log(constants);

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

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});
