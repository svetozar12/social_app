import * as express from "express";
import { routes } from "./routes";
import "dotenv/config";
// Boot express
const app: express.Application = express();

// Application routing
routes(app);

// Start server
app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}!`));

export default app;
