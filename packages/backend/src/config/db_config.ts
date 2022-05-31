import * as mongoose from "mongoose";
import { constants } from "../constants";

const connection = constants.DB_STRING;

const connect = () => {
  return mongoose.connect(
    connection,
    {
      autoIndex: true,
    },
    () => {
      console.log("Connection with mongo");
    },
  );
};
export default connect;
