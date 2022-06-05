import { mongo } from "mongoose";
import { PassportStatic } from "passport";
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
console.log("passporot");

module.exports = (passport: PassportStatic) => {
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
        const isUser = await User.findOne({
          provider_id: profile.id,
        });

        if (isUser) {
          done(null, isUser);
        }
        if (!isUser) {
          const user = new User({
            provider_id: profile.id,
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
      async function (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: CallableFunction,
      ) {
        try {
          const isUser = await User.findOne({
            provider_id: profile.id,
          });

          if (isUser) {
            done(null, isUser);
          } else {
            const user = User.create({
              provider_id: profile.id,
              username: profile.displayName,
              user_avatar: profile.photos[0].value,
            });
            done(null, user);
          }
        } catch (error) {
          console.error(error);
        }
      },
    ),
  );

  passport.use(
    new JwtStrategy(
      opts,
      async (jwt_payload: string, done: CallableFunction) => {
        const user = await User.findOne({ _id: jwt_payload.sub });
        if (!user) return done(user, false);
        if (user) return done(null, user);
        return done(null, false);
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(
    async (
      id: { _id: string; username: string; user_avatar: string },
      done,
    ) => {
      const _id = new mongo.ObjectId(id._id);
      User.findOne({ _id }, (err: any, user: any) => done(null, user));
    },
  );
};
