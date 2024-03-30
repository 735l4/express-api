import { Express } from "express"
import middleware from "../middleware"
import cookieParser from "cookie-parser";

export default function(app: Express) {
    app.use(cookieParser());
}