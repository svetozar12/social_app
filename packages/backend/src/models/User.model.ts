import { Schema, model } from "mongoose";

export interface UserSchema {
  provider_id: String;
  username: string;
  user_avatar: string;
  hash: string;
  salt: string;
}

const UserSchema = new Schema<UserSchema>({
  provider_id: String,
  username: String,
  user_avatar: String,
  hash: String,
  salt: String,
});

const User = model("User", UserSchema);

export default User;
