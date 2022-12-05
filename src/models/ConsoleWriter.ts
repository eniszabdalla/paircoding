import { LoggerModel } from "../interfaces/LoggerModel";
import NodeDateParser from 'node-date-parser';

export class ConsoleWriter implements LoggerModel {
    public write(message: string) {
        console.log(`[${new NodeDateParser().parse("Y-m-d H:i:s.V")}] ${message}`);
    }
}