import { Schema, model } from "mongoose";
import * as bcrypt from "bcrypt";

interface Users {
  username: string;
  password: string;
  isValidPassword: any;
}
const UserSchema = new Schema<Users>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error as Error);
  }
});

UserSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    return false;
  }
};

const Users = model<Users>("users", UserSchema);
export default Users;
