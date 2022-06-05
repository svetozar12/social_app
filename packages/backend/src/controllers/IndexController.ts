import { NextFunction, Request, Response, Router } from "express";
import ensureAuth from "../middlewares/isAuth";
const IndexController: Router = Router();

IndexController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    res.send(req.isAuthenticated());
  },
);

IndexController.get(
  "/failed",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res
        .status(401)
        .send({ data: "you don`t have permission to visit me :/ !" });
    } catch (e) {
      next(e);
    }
  },
);

IndexController.get(
  "/protected",
  ensureAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).send({ data: "you have permission to visit me :)!" });
    } catch (e) {
      next(e);
    }
  },
);

export default IndexController;
