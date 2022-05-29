import { Request, Response, Router } from "express";
import genPassword from "../utils/genPassword";
import User, { UserSchema } from "../models/User.model";
import validPassword from "../utils/validPassword";
import issueJWT from "../utils/issueJwt";

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

UserController.post("/", (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  const saltHash = genPassword(password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username,
    hash: hash,
    salt: salt,
  });

  try {
    newUser.save().then((user: UserSchema) => {
      res.json({ success: true, user: user });
    });
  } catch (err) {
    return res.json({ success: false, msg: err });
  }
});

export default UserController;
