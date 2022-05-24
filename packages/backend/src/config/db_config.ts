import { Sequelize } from "sequelize";
import { constants } from "../constants";

const sequelize = new Sequelize(constants.DB_STRING as string);

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
