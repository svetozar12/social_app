import * as mongoose from "mongoose";

const connection_string = "mongodb://localhost:27017/rest_api";

export const connectDb = () => {
  return mongoose.connect(connection_string, {
    autoIndex: true,
  });
};
