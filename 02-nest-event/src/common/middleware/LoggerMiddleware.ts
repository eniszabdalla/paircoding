import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class LoggerMiddleware implements NestMiddleware {
    use(request: Request, response: Response, next: NextFunction) {
        console.log(`[${request.method.toUpperCase()}] ${request.path} ${Object.keys(request.body).length ? JSON.stringify(request.body) : ''}`);
        next();
    }
}