import { Router, Request, Response } from 'express';
import { ConsoleWriter } from '../models/ConsoleWriter';
import { FileWriter } from '../models/FileWriter';
import { LoggingService } from '../services/LoggingService';

const router: Router = Router();

router.post("/:target", (request: Request, response: Response) => {
    const { target } = request.params;

    if(target != "file" && target != "console")
        return response.status(500).send({ message: `Logging output "${target}" not supported! Either file or console should be used!` });

    const loggingService = new LoggingService(target === "file" ? new FileWriter() : new ConsoleWriter());
    loggingService.write(request.body.message);

    return response.status(200).end();
})

export const LoggingRoutes: Router = router;