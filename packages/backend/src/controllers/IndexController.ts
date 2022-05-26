import { NextFunction, Request, Response, Router } from "express";
import passport = require("passport");
const IndexController: Router = Router();

IndexController.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send({ data: "you have permission to visit me :)!" });
    } catch (e) {
      next(e);
    }
  },
);

export default IndexController;
