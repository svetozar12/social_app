import * as jsonwebtoken from "jsonwebtoken";
import { constants } from "../constants";

const issueJWT = (user: any) => {
  const _id = user._id;

  const expiresIn = "1d";

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, constants.JWT_SECRET, {
    expiresIn: expiresIn,
    algorithm: "HS256",
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
};

export default issueJWT;
