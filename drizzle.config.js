import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai%20form%20builder_owner:ZlJPsUNB2eq7@ep-young-voice-a52hpg07.us-east-2.aws.neon.tech/ai%20form%20builder?sslmode=require',
  }
});