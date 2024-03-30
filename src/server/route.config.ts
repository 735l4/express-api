import { Express } from "express";
import router from "../routes";

export default function(app: Express) {
    app.use("/api", router);
}