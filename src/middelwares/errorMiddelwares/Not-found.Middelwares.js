import { StatusCodes } from 'http-status-codes';

export default function notFoundMiddleware(req, res, next) {
  res.status(StatusCodes.NOT_FOUND).json({ message: "Not Found" });
}