import { Express } from "express";
import ExpressConfig from "./server/express.config";
import routeConfig from "./server/route.config";
import middlewareConfig from "./server/middleware.config";
import { configDotenv } from "dotenv";
import { startServer } from "./server/server.config";

const app: Express = ExpressConfig();

middlewareConfig(app);
routeConfig(app)
configDotenv();

startServer(app);
