import {z} from "zod";

let envSchema = z.object({
  "APP_URL": z.string().url(),
  "APP_PORT": z.coerce.number(),

  "DB_CONNECTION": z.enum(["postgres", "mysql"] as const),
  "DB_HOST": z.string().trim().min(1),
  "DB_PORT": z.coerce.number(),
  "DB_DATABASE": z.string().trim().min(1),
  "DB_USERNAME": z.string().trim().min(1),
  "DB_PASSWORD": z.string(),
})

const env = envSchema.parse(process.env)

export default env;
