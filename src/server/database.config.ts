import { Client } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import env from "../../config/env";

export default async function () {
    const client = new Client({
        host: env.DB_HOST,
        port: env.DB_PORT,
        user: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
    })

    await client.connect();

    return drizzle(client);
}
