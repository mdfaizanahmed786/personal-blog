import { Hono } from "hono";
import {
  getAllUsers,
  loginUser,
  signUpUser,
} from "../controllers/user.controller";
const app = new Hono();

app.post("/signup", signUpUser);

app.post("/login", loginUser);

app.get("/all", getAllUsers);

export default app;
