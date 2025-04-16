import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_CayI4JR2oYhq@ep-shy-shape-a4roeovo-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
  }
});
