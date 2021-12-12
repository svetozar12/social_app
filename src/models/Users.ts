import { Schema, model } from "mongoose";

interface Users {
  username: string;
}
const UserSchema = new Schema<Users>({
  username: {
    type: String,
    required: true,
  },
});

const Users = model<Users>("users", UserSchema);
export default Users;
