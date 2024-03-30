import { pgSchema, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const publicSchema = pgSchema("public");

export const users = publicSchema.table('users', {
    id: serial('id').primaryKey(),
    name: text('name'),
    email: text('email').unique(),
    password: text('password'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
})