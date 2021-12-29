import * as express from "express";
import { routes } from "./routes";
import { connectDb } from "./helpers/db_helper";
const app = express();

connectDb();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", routes);

app.get("/api", (req, res) => {
  res.send(`<center>
  <h1>Welcome to my API</h1>
  <h1>
    	GET
  		<h2>Get all users</h2>
    	<h4>http://localhost:8080/api/read</h4>
    	<h2>Get single user</h2>
    	<h4>http://localhost:8080/api/read/:username</h4>
  </h1>
  
    <h1>
    	POST
  		<h2>Create user</h2>
      	<h4>http://localhost:8080/api/create</h4>
  </h1>
  
    <h1>
    	PATCH
  		<h2>Update user</h2>
      	<h4>http://localhost:8080/api/update/:id</h4>
  </h1>
  
    <h1>
    	DELETE
  		<h2>Delete user</h2>
      <h4>http://localhost:8080/api/delete/:id</h4>
  </h1>
</center>`);
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080...");
});
