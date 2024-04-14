import { Hono } from "hono";
import userMiddleware from "../middlewares/userMiddleware";
import { addPost, deletePost, editPost, getAllPosts } from "../controllers/post.controller";
const app=new Hono();

app.get("/all", userMiddleware,  getAllPosts);
app.post("/add", userMiddleware, addPost);
app.delete("/", userMiddleware, deletePost)
app.put("/edit", userMiddleware, editPost);


export default app