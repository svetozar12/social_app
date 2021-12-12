import { Router } from "express";
import { read } from "./Read";
const route = Router();

route.use("/read", read);

export { route as routes };
