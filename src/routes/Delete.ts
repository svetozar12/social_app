import { Router } from "express";
import Users from "../models/Users";
const route = Router();

// Create user
route.delete("/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const exist = await Users.find({ username });

    if (exist) {
      await Users.deleteOne({ username });
      return res.status(409).json({ message: `User ${username} deleted` });
    }

    return res.json({ Message: "User cannot be deleted" }).status(409);
  } catch (error) {
    return res.json({ Error: error.message });
  }
});

export { route as del };
