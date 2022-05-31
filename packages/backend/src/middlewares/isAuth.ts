import { Request, Response, NextFunction } from "express";
import { constants } from "../constants";

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.isAuthenticated());

  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/");
  }
};

export default ensureAuth;
