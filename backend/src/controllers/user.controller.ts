import { Context, Next } from "hono";
import { loginUserSchema, signUpUserSchema } from "../schema/zod-schema";
import { Jwt } from "hono/utils/jwt";

const signUpUser = async (c: Context, next: Next) => {
  const { body } = c;
  
  const parseUserData = signUpUserSchema.safeParse(body);
  if (!parseUserData.success) {
    return c.json({ success: false, message: parseUserData.error }, 400);
  }
  const { name, age, username, password } = parseUserData.data;
  const prisma = c.get("prisma");
  try {
   const {id}= await prisma.user.create({
      data: {
        name,
        age,
        username,
        password,
      },
    });
    const token=Jwt.sign({id}, c.env.JWT_SECRET)
    
    return c.json({ success: true, message: "user created" }, 201);
  } catch (error) {
    await next();
  }
};

const loginUser = async (c: Context, next: Next) => {
  const { body } = c;
  const parseUserData = loginUserSchema.safeParse(body);
  if (!parseUserData.success) {
    return c.json({ success: false, message: parseUserData.error }, 400);
  }
  const { username, password } = parseUserData.data;
  const prisma = c.get("prisma");
  try {
    const result = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
    if (!result) {
      return c.json({ success: false }, 400);
    }

    return c.json({ success: true, message: "Successfully logged in" }, 200);
  } catch (error) {
    await next();
  }
};

const getAllUsers = async (c: Context, next: Next) => {
  try {
    const prisma = c.get("prisma");

    const users = await prisma.user.findMany({});

    return c.json({ success: true, users }, 200);
  } catch (error) {
    await next();
  }
};

export { signUpUser, loginUser, getAllUsers };
