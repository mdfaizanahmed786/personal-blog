import { Context, Next } from "hono";

const userMiddleware=async(c:Context, next:Next)=>{
    const token=c.req.header("authorization")
    if(!token) return;
    await next();
}

export default userMiddleware
