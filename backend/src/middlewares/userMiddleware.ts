import { Context, Next } from "hono";
import { Jwt } from "hono/utils/jwt";

const userMiddleware = async (c: Context, next: Next) => {
  const token = c.req.header("authorization")!;
  if (!token) {
    return c.json({success:false, message:"You are not authenticated"}, 403)
  }
  const decodedToken = await Jwt.verify(token.split(" ")[1], c.env.JWT_SECRET);
  c.set("id", decodedToken.id);
  await next();
};

export default userMiddleware;
