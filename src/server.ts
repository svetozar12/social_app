import * as express from "express";
import { routes } from "./routes";
import { connectDb } from "./helpers/db_helper";

const app = express();

connectDb();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.write("<center><h1>Welcome to my api</h1>");
  res.write("<h2>Get all users</h2><br>http://localhost:8080/api/read");
  res.write(
    "<h2>Get single user</h2><br>http://localhost:8080/api/read/randomUser</center>",
  );
  res.end();
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080...");
});
