// @ts-nocheck
import isObjEmpty from "../utils/isObjEmpty";
import { Model } from "mongoose";
import { NextFunction, Request, Response } from "express";
export interface IResult {
  next?: { page: number; limit: number };
  previous?: { page: number; limit: number };
  results?: any;
}

function paginatedResults(model: Model<any>, status: "public" | "private") {
  return async (req: Request, res: Response, next: NextFunction) => {
    const isEmpty = isObjEmpty(req.query);

    const page = isEmpty ? 1 : req.query.page;
    const limit = isEmpty ? 5 : req.query.page;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results: IResult = {};
    const user_id = req.query.user_id;
    const isMe = req.query.me;

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
      if (isMe) {
        console.log("isMe");

        results.results = await model
          .find({ owner_id: isMe })
          .limit(limit)
          .skip(startIndex)
          .exec();
      }
      if (user_id) {
        console.log("userid");

        results.results = await model
          .find({ owner_id: user_id, status })
          .limit(limit)
          .skip(startIndex)
          .exec();
        console.log(results.results);
      } else if (!isMe) {
        console.log("else");

        results.results = await model
          .find({ status })
          .limit(limit)
          .skip(startIndex)
          .exec();
      }

      console.log(results.results);

      if (results.results.length <= 0) {
        res.paginatedResults = "";
        next();
      }
      res.paginatedResults = results;
      next();
    } catch (e) {
      // @ts-ignore

      return res.status(500).json({ message: e.message });
    }
  };
}

export default paginatedResults;
