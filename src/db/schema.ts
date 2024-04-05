import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";


export const users = pgTable('users', {
    id: serial('ids').primaryKey(),
    name: text('name'),
    email: text('email').unique(),
    password: text('password'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
