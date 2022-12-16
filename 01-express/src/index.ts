import Express from 'express';
import BodyParser from 'body-parser';
import { LoggingRoutes } from './routes/LoggingRoutes';

const app = Express();

// app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use("/logging", LoggingRoutes);

app.listen(3000, () => console.log("App is listening on port 3000!"));