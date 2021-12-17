import { Router } from "express";
import Users from "../models/Users";
const route = Router();

// Create user
route.post("/", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const exist = await Users.find({ username });

    if (exist.length >= 1)
      return res.status(409).json({ message: "User already exist" });
    const users = new Users({ username, password });
    users.save();
    return res
      .json({ Message: `User ${users.username} was created` })
      .status(200);
  } catch (error) {
    return res.json({ Error: error.message });
  }
});

export { route as create };
