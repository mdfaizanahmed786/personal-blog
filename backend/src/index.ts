import { Hono } from "hono";
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
app.use(cors({
origin:["http://localhost:5173", "https://personal-blog-lemon-kappa.vercel.app/"],
  credentials: true,
}))
app.use(prettyJSON())

// routes

app.route("/api/v1/post", posts)
app.route("/api/v1/user", users)

// app.notFound((c) => {
//   return c.text('Custom 404 Message', 404)
// })
app.onError(erroMiddleware)

export default app