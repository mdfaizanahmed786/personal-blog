import { Context, Next } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostSchema, editPostSchema } from "../schema/zod-schema";

const getAllPosts = async (c: Context, next: Next) => {
  const { page } = c.req.query();
  const userId = c.get("id");
  if (!userId) {
    return c.json(
      { success: false, message: "You are not authenticated" },
      400
    );
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const itemsPerPage = 10;
  const skip: number = (parseInt(page) - 1) * itemsPerPage;

  try {
    const posts = await prisma.posts.findMany({
      where: {
        userId,
      },
      select: {
        user: true,
      },

      skip,
      take: itemsPerPage,
    });

    return c.json({ success: true, posts }, 200);
  } catch (error) {
    await next();
  }
};

const deletePost = async (c: Context, next: Next) => {
  const userId = c.get("id");
  if (!userId) {
    return c.json(
      { success: false, message: "You are not authenticated" },
      400
    );
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    await prisma.posts.delete({
      where: {
        userId,
      },
    });

    return c.json({ success: true, message: "Deleted post" }, 200);
  } catch (error) {
    await next();
  }
};

const editPost = async (c: Context, next: Next) => {
  const userId = c.get("id");
  const { body } = c;

  if (!userId) {
    return c.json(
      { success: false, message: "You are not authenticated" },
      400
    );
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const parseEditPostsSchema = createPostSchema.safeParse(body);
  if (!parseEditPostsSchema.success) {
    return c.json({
      success: false,
      messsage: parseEditPostsSchema.error.cause,
    });
  }

  try {
    await prisma.posts.update({
      data: {
        title: parseEditPostsSchema.data.title ?? "",
        content: parseEditPostsSchema.data.content ?? "",
        slug: parseEditPostsSchema.data.slug ?? "" ,
      },
      where: {
        userId,
      },
    });

    return c.json({ success: true, message: "Edited post" }, 200);
  } catch (error) {
    await next();
  }
};

const addPost = async (c:Context, next:Next) => {
    const userId = c.get("id");
    const { body } = c;
  
    if (!userId) {
      return c.json(
        { success: false, message: "You are not authenticated" },
        400
      );
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const parseEditPostsSchema = editPostSchema.safeParse(body);
    if (!parseEditPostsSchema.success) {
      return c.json({
        success: false,
        messsage: parseEditPostsSchema.error.cause,
      });
    }
  
    try {
      await prisma.posts.update({
        data: {
          title: parseEditPostsSchema.data.title,
          content: parseEditPostsSchema.data.content,
          slug: parseEditPostsSchema.data.slug,
        },
        where: {
          userId,
        },
      });
  
      return c.json({ success: true, message: "added post" }, 200);
    } catch (error) {
      await next();
    }
};

export { getAllPosts, deletePost, editPost, addPost };
