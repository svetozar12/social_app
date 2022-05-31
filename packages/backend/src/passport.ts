import * as passport from "passport";
import { constants } from "./constants";
import User from "./models/User.model";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const opts: any = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = constants.JWT_SECRET;
opts.algorithms = ["HS256"];

passport.use(
  new GoogleStrategy(
    {
      clientID: constants.GOOGLE_CLIENT_ID,
      clientSecret: constants.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: CallableFunction,
    ) {
      console.log(profile);

      const isUser = await User.findOne({ username: profile.displayName });
      if (isUser) {
        console.log(isUser);

        done(null, isUser);
      }
      if (!isUser) {
        const user = new User({
          username: profile.displayName,
          user_avatar: profile.photos[0].value,
        });
        await user.save();

        done(null, user);
      }
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
      console.log(profile);
      done(null, profile);
    },
  ),
);

passport.use(
  new JwtStrategy(opts, async (jwt_payload: string, done: CallableFunction) => {
    const user = await User.findOne({ _id: jwt_payload.sub });
    if (!user) return done(user, false);
    if (user) return done(null, user);
    return done(null, false);
  }),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});
