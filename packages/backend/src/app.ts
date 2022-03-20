import * as express from "express";
import { routes } from "./routes";

// Boot express
const app: express.Application = express();

// Application routing
routes(app);
export default app;
