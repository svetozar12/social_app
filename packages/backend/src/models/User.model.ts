import { Schema, model } from "mongoose";

export interface UserSchema {
  username: string;
  hash: string;
  salt: string;
}

const UserSchema = new Schema<UserSchema>({
  username: String,
  hash: String,
  salt: String,
});

const User = model("User", UserSchema);

export default User;
