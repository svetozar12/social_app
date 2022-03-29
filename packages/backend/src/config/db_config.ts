import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://user:pass@example.com:5432/dbname");

const connect = async () => {
  try {
    sequelize.authenticate();
    console.log("Connection has been established succesfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();
