import express, { Express, Request, Response  } from "express";
import ExpressConfig from "./server/express.config";
import routeConfig from "./server/route.config";
import middlewareConfig from "./server/middleware.config";
import { configDotenv } from "dotenv";

const app: Express = ExpressConfig();

middlewareConfig(app);
routeConfig(app)
configDotenv();

const port = 3000;

app.listen(port, () => {
  console.log(`[server] Server is running on http://localhost:${port}`);
})