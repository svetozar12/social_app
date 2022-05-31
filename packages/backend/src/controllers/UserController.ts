import { Request, Response, Router } from "express";
import genPassword from "../utils/genPassword";
import User, { UserSchema } from "../models/User.model";
import validPassword from "../utils/validPassword";
import issueJWT from "../utils/issueJwt";
import passport = require("passport");
import ensureAuth from "../middlewares/isAuth";

const UserController = Router();

UserController.post("/login", async (req: Request, res: Response) => {
  try {
    const user: any = await User.findOne({ username: req.body.username });

    if (!user)
      return res
        .status(401)
        .json({ success: false, msg: "could not find user" });
    const isValid = validPassword(req.body.password, user.hash, user.salt);

    if (isValid) {
      const tokenObject = issueJWT(user);
      return res.status(200).json({
        _id: user._id,
        username: user.username,
        success: true,
        token: tokenObject.token,
        expiresIn: tokenObject.expires,
      });
    }
  } catch (error) {
    return res.status(500);
  }
});

UserController.get("/:id", ensureAuth, async (req: Request, res: Response) => {
  try {
    const user: any = await User.findOne({ _id: req.params.id });

    if (!user)
      return res
        .status(401)
        .json({ success: false, msg: "could not find user" });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500);
  }
});

UserController.post("/", async (req: Request, res: Response) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const userExists = await User.findOne({ username }).exec();
    if (userExists) return res.status(409).send("user exists");
    const saltHash = genPassword(password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    const random_6_digits = Math.floor(100000 + Math.random() * 900000);
    const image = `https://avatars.dicebear.com/api/jdenticon/${random_6_digits}.svg`;
    const newUser = new User({
      username,
      user_avatar: image,
      hash: hash,
      salt: salt,
    });

    newUser.save().then((user: UserSchema) => {
      res.json({ success: true, user: user });
    });
  } catch (err) {
    return res.json({ success: false, msg: err });
  }
});

export default UserController;
