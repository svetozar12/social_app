import * as jwt from "jsonwebtoken";

/**
 * signTokens utility function
 *
 * @param data is an object which is containing username and password
 * @param secret is the jwt secret
 * @param expires when will the token expire
 */

const signTokens = (
  data: {
    _id: string;
    username: string;
    password: string;
  },
  secret: string,
  expires: string,
) => {
  return new Promise((resolve, reject) => {
    jwt.sign(data, secret, { expiresIn: expires }, (err: any, token: any) => {
      if (err) {
        return reject(resolve("bad token"));
      }
      return resolve(token);
    });
  });
};

export default signTokens;
