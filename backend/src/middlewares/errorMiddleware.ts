import { Context } from "hono";

const erroMiddleware = (err: any, c: Context) => {
  console.error(`${err}`);
  return c.json({ success: false, message: err }, 500);
};

export default erroMiddleware;
