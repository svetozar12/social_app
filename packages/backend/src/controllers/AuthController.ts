import { NextFunction, Request, Response, Router } from "express";
import passport = require("passport");
import { constants } from "../constants";
const AuthController = Router();

AuthController.get("/login/success", (req: Request, res: Response) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

AuthController.get("/login/failed", (req: Request, res: Response) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

AuthController.get(
  "/logout",
  (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.logout((err) => {
      if (err) return next(err);
      res.redirect(constants.CLIENT_URL as string);
    });
  },
);

AuthController.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] }),
);

AuthController.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: constants.CLIENT_URL as string,
    failureRedirect: "/login/failed",
  }),
);

AuthController.get(
  "/github",
  passport.authenticate("github", { scope: ["profile"] }),
);

AuthController.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: constants.CLIENT_URL as string,
    failureRedirect: "/login/failed",
  }),
);

AuthController.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] }),
);

AuthController.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: constants.CLIENT_URL as string,
    failureRedirect: "/login/failed",
  }),
);

export default AuthController;
