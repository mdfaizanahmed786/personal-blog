import { Hono } from "hono";
import {
  deleteUser,
  getAllUsers,
  getUserInfo,
  logOutUser,
  loginUser,
  signUpUser,
} from "../controllers/user.controller";
import userMiddleware from "../middlewares/userMiddleware";
const app = new Hono();

app.post("/signup", signUpUser);

app.post("/login", loginUser);

app.use("*", userMiddleware);
app.get("/all", getAllUsers);

app.delete("/", deleteUser);

app.get("/me", getUserInfo);
app.get("/logout", logOutUser);

export default app;
