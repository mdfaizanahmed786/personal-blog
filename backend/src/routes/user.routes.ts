import { Hono } from "hono";
import {
  deleteUser,
  getAllUsers,
  loginUser,
  signUpUser,
} from "../controllers/user.controller";
import userMiddleware from "../middlewares/userMiddleware";
const app = new Hono();

app.post("/signup", signUpUser);

app.post("/login", loginUser);

app.get("/all", userMiddleware,  getAllUsers);

app.delete("/", userMiddleware, deleteUser);

export default app;
