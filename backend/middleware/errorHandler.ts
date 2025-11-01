import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export function errorHandler
(
    err: AppError | Error,
    req: Request,
    res: Response,
    next: NextFunction
)
{
    if (err instanceof AppError) {
        res.status(err.status).json({ message: err.message, details: err.details });
    }
    else {
        res.status(500).json({ message: "Internal Server Error", details: "Something Went Wrong" });
    }
}