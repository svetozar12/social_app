import { Router } from "express";
import Users from "../models/Users";
const route = Router();

// Create user
route.put("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const newName = req.body.newName;
    const exist = await Users.find({ _id });

    if (!exist) {
      return res.status(400).json({ message: `User doesn't exist` });
    }

    const user = await Users.findByIdAndUpdate(_id, { username: newName });

    return res
      .status(201)
      .json({ Message: ` username has been updated with ${newName}` });
  } catch (error) {
    return res.json({ Error: error.message });
  }
});

export { route as update };
