import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    out: "./src/db/migrations",
    schema: "./src/db/schema.ts",
    driver: 'pg',
    verbose: true,
    strict: true,
    dbCredentials: {
        host: process.env.DB_HOST ?? "127.0.0.1",
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
        user: process.env.DB_USERNAME ?? "root",
        password: process.env.DB_PASSWORD ?? "",
        database: process.env.DB_DATABASE ?? "drizzle",
    }
})