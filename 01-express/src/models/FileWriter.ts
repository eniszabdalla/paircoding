import Fs from 'fs';
import Path from 'path';
import NodeDateParser from 'node-date-parser';
import { LoggerModel } from "../interfaces/LoggerModel";

export class FileWriter implements LoggerModel {
    private logPath = Path.resolve("log");

    public write(message: string) {
        const dateParser = new NodeDateParser();

        if(!Fs.existsSync(this.logPath)) {
            Fs.mkdirSync(this.logPath, { recursive: true });
        }

        Fs.appendFileSync(Path.resolve(this.logPath, `${dateParser.parse("Y-m-d")}.log`), `[${dateParser.parse("H:i:s.V")}] ${message}\n`, { encoding: "utf-8"});
    }
}