import { LoggerModel } from "../interfaces/LoggerModel";

export class LoggingService {
    private model: LoggerModel;

    public constructor(model: LoggerModel) {
        this.model = model;
    }

    public write(message: string): void {
        this.model.write(message);
    }
}