import { Router } from "express";
import Users from "../models/Users";
const route = Router();

// Delete user
route.delete("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const exist = await Users.find({ _id });

    if (exist) {
      await Users.deleteOne({ _id });
      return res
        .status(409)
        .json({ message: `User ${exist[0].username} deleted` });
    }

    return res.json({ Message: "User cannot be deleted" }).status(409);
  } catch (error) {
    return res.json({ Error: error.message });
  }
});

export { route as del };
