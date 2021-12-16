import { Router } from "express";
import { create } from "./Create";
import { read } from "./Read";
import { del } from "./Delete";
import { update } from "./Update";
const route = Router();

route.use("/create", create);
route.use("/read", read);
route.use("/delete", del);
route.use("/update", update);

export { route as routes };
