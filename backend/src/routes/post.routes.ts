import { Hono } from "hono";
import userMiddleware from "../middlewares/userMiddleware";
import { addPost, deletePost, editPost, getAllPosts } from "../controllers/post.controller";
const app=new Hono();
app.use("/*",userMiddleware)
app.get("/all",   getAllPosts);
app.post("/add",  addPost);
app.delete("/", deletePost)
app.put("/edit", editPost);



export default app