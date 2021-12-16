import { Router } from "express";
import Users from "../models/Users";
const route = Router();

// Create user
route.post("/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const exist = await Users.find({ username });

    if (exist.length >= 1)
      return res.status(409).json({ message: "User already exist" });
    const users = new Users({ username });
    users.save();
    return res.json({ users }).status(200);
  } catch (error) {
    return res.json({ Error: error.message });
  }
});

export { route as create };
