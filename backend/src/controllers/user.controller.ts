import { Context, Next } from "hono";
import { loginUserSchema, signUpUserSchema } from "../schema/zod-schema";
import { Jwt } from "hono/utils/jwt";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import bcrypt from 'bcryptjs'

const signUpUser = async (c: Context, next: Next) => {
  const body=await c.req.json()


  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const parseUserData = signUpUserSchema.safeParse(body);
  if (!parseUserData.success) {
    return c.json({ success: false, message: parseUserData.error }, 400);
  }
  const { name, age, username, password } = parseUserData.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const { id } = await prisma.user.create({
      data: {
        name,
        age,
        username,
        password: hashedPassword
      },
    });
    const token = await Jwt.sign({ id }, c.env.JWT_SECRET);

    return c.json({ success: true, message: "user created", token }, 201);
  } catch (error) {
    await next();
  }
};

const loginUser = async (c: Context, next: Next) => {
    const body=await c.req.json()
  const parseUserData = loginUserSchema.safeParse(body);
  if (!parseUserData.success) {
    return c.json({ success: false, message: parseUserData.error }, 400);
  }
  const { username, password } = parseUserData.data;
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const result = await prisma.user.findFirst({
      where: {
        username,
      
      },
    });

    if (!result) {
      return c.json({ success: false, message:"No user found" }, 400);
    }
    const comparePassword = await bcrypt.compare(password, result.password);
    if (!comparePassword) {
      return c.json({ success: false, message:"Invalid credentials" }, 400);
    }

    const token = await Jwt.sign({ id: result.id }, c.env.JWT_SECRET);

    return c.json(
      { success: true, message: "Successfully logged in", token },
      200
    );
  } catch (error) {
    console.log(error)
    await next();
  }
};

const getAllUsers = async (c: Context, next: Next) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  try {
    const users = await prisma.user.findMany()
    console.log(users)

    return  c.json({ success: true, users }, 200);
  } catch (error) {
    console.log(error)
    await next();
  }
};

const deleteUser = async (c: Context, next: Next) => {
  try {
    const userId = c.get("id");
    if (!userId) {
      return c.json({ success: false, message: "Provide a user id" }, 400);
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const users = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return c.json({ success: true, users }, 200);
  } catch (error) {
    console.log(error)
    await next();
  }
};

export { signUpUser, loginUser, getAllUsers, deleteUser };
