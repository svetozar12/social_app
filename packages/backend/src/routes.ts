import { Application, Router } from "express";
import AuthController from "./controllers/AuthController";
import BlogsController from "./controllers/BlogsController";
import IndexController from "./controllers/IndexController";
import UserController from "./controllers/UserController";

const _routes: [string, Router][] = [
  ["/", IndexController],
  ["/auth", AuthController],
  ["/user", UserController],
  ["/blog", BlogsController],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
