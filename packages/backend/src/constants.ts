import "dotenv/config";

export const constants = {
  PORT: process.env.PORT,
  DB_STRING: process.env.DB_CONNECTION_STRING as string,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
  CLIENT_URL: process.env.CLIENT_URL as string,
};
