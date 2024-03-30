import { Client } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

export default async function () {
    const client = new Client({
        host: process.env.DB_HOST ?? "127.0.0.1",
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
        user: process.env.DB_USERNAME ?? "root",
        password: process.env.DB_PASSWORD ?? "",
        database: process.env.DB_DATABASE ?? "drizzle",
    })

    await client.connect();

    return drizzle(client);
}