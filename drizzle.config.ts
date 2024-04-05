import { defineConfig } from 'drizzle-kit'
import env from './config/env'

export default defineConfig({
    out: "./src/db/migrations",
    schema: "./src/db/schema.ts",
    driver: 'pg',
    verbose: true,
    strict: true,
    dbCredentials: {
        host: env.DB_HOST,
        port: env.DB_PORT,
        user: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
    }
})
