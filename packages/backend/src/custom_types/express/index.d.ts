import IResult, { IResult } from "../../middleware/pagination";

declare global {
  namespace Express {
    interface Request {
      token: string | undefined | any;
    }
    interface Response {
      paginatedResults: IResult;
    }
  }
}
