import "dotenv/config";

export const constants = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_STRING: `mongodb://${
    process.env.NODE_ENV === "production" ? "mongodb" : "localhost"
  }:27017/${process.env.DB_NAME}`,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID as string,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET as string,
  CLIENT_URL: process.env.CLIENT_URL as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
};
