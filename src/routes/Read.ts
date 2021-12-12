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
route.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Users.find({ _id: id });
    return res.json({ users }).status(200);
  } catch (error) {
    return res.json({ Error: error.message });
  }
});

export { route as read };
