import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import erroMiddleware from "./middlewares/errorMiddleware";
import posts from "./routes/post.routes"
import users from "./routes/user.routes"

const app= new Hono<{
  Bindings:{
      DATABASE_URL:string
      JWT_SECRET:string
  }
}>({strict:false});

app.use(logger())
app.use(cors())
app.use(prettyJSON())

app.use(async(c, next)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    // @ts-ignore
    c.set('prisma', prisma)
    await next();
})

// routes

app.route("/api/post", posts)
app.route("/api/user", users)

app.notFound((c) => {
  return c.text('Custom 404 Message', 404)
})
app.onError(erroMiddleware)

export default app