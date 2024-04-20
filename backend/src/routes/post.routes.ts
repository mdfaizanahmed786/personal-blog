import { Hono } from "hono";
import userMiddleware from "../middlewares/userMiddleware";
import { addPost, deletePost, editPost, getAllPosts, getAllUserPosts } from "../controllers/post.controller";
const app=new Hono();
app.get("/",   getAllPosts);
app.use("/*",userMiddleware)
app.get("/all",   getAllUserPosts);
app.post("/add",  addPost);
app.delete("/", deletePost)
app.put("/edit", editPost);



export default app