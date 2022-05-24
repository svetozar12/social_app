import { Application, Router } from "express";
import AuthController from "./controllers/AuthController";
import IndexController from "./controllers/IndexController";

const _routes: [string, Router][] = [
  ["/", IndexController],
  ["/auth", AuthController],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
