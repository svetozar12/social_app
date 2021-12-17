import * as joi from "joi";
import "joi-extract-type";
import { IUsers } from "../models/Users";

const user = joi.object({
  username: joi.string().required().min(2),
  password: joi.string().required().min(2),
});
