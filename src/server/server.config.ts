import { Express } from "express";

const app_url = process.env.APP_URL ?? "http://localhost";
const port: number = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000;

const findAvailablePort = (app: Express, port: number) => {
    let availablePort = port;

    app.listen(availablePort, () => {
        console.log(`[server] Server is running on ${app_url}:${availablePort}`);
    }).on("error", (err: Error & { code: string }) => {
        if (err.code === "EADDRINUSE") {
            findAvailablePort(app, availablePort + 1);
        } else {
            console.error(err);
            process.exit(1);
        }
    });
}
export const startServer = (app: Express) => {
    return findAvailablePort(app, port);
}