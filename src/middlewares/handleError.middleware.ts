import { Request, Response, NextFunction } from "express";
import { AppError } from "../error/ AppError";

export const handleErrorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error instanceof AppError ? error.statusCode : 500;
  const message =
    error instanceof AppError ? error.message : "Internal server error";
  const stack = process.env.NODE_ENV === "production" ? "🥞" : error.stack;

  //emoji serve para evitar de expor informações "sensíveis" de depuração

  res.status(statusCode).json({
    message,
    stack,
  });
};
