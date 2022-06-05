import { Request, Response, NextFunction } from "express";

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/failed");
  }
};

export default ensureAuth;
