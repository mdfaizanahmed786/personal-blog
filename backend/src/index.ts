import { Hono } from "hono";

const app = new Hono<{
  Variables: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
