import { Router } from "express";
import Users from "../models/Users";
const route = Router();

// Get all users
route.get("/", async (req, res) => {
  try {
    const users = await Users.find({});
    return res.json({ users }).status(200);
  } catch (error) {
    return res.json({ Error: error.message });
  }
});

// Get single user
route.get("/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const users = await Users.find({ username });
    return res.json({ users }).status(200);
  } catch (error) {
    return res.json({ Error: error.message });
  }
});

export { route as read };
