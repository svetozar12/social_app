// @ts-nocheck
import isObjEmpty from "../utils/isObjEmpty";
import { Model } from "mongoose";
import { NextFunction, Request, Response } from "express";
export interface IResult {
  next?: { page: number; limit: number };
  previous?: { page: number; limit: number };
  results?: any;
}

function paginatedResults(model: Model<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const isEmpty = isObjEmpty(req.query);

    const page = isEmpty ? 1 : req.query.page;
    const limit = isEmpty ? 5 : req.query.page;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results: IResult = {};

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
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      if (results.results.length <= 0) {
        res.paginatedResults = "";
        next();
      }
      res.paginatedResults = results;
      next();
    } catch (e) {
      // @ts-ignore

      res.status(500).json({ message: e.message });
      next();
    }
  };
}

export default paginatedResults;
