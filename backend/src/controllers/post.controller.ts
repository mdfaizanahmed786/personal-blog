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
  const skip: number = (parseInt(page ?? 1) - 1) * itemsPerPage;

  try {
    const posts = await prisma.posts.findMany({
      where: {
        userId,
    
      },
      select: {
        user: {
          select: {
            name: true,
            age: true,
            username: true,
          },
        },
        id:true,
        title: true,
        content: true,
        slug: true,
        published: true,
        thumbnail: true,
        createdAt: true,
        updatedAt: true,


      },

      skip,
      take: itemsPerPage,
    });

    return c.json({ success: true, posts }, 200);
  } catch (error) {
    console.log(error);
    await next();
  }
};

const deletePost = async (c: Context, next: Next) => {
  const userId = c.get("id");
  const postId = c.req.query("postId");
  if (!postId) {
    return c.json({ success: false, message: "Provide a post id" }, 400);
  }
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
        id: postId,
      },
    });

    return c.json({ success: true, message: "Deleted post" }, 200);
  } catch (error) {
    console.log(error);
    await next();
  }
};

const editPost = async (c: Context, next: Next) => {
  const userId = c.get("id");

  const body = await c.req.json();
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
      messsage: parseEditPostsSchema.error,
    });
  }


  try {
   const postDataToUpdate = {
  where: {
    userId,
    id: parseEditPostsSchema.data.postId,
  },
  data: {},
};

Object.keys(parseEditPostsSchema.data).forEach(field => {
// @ts-ignore
  if (field !== 'postId' && parseEditPostsSchema.data[field] !== undefined) {
    // @ts-ignore
    postDataToUpdate.data[field] = parseEditPostsSchema.data[field];
  }
});

// Perform the update operation
await prisma.posts.update(postDataToUpdate);

    return c.json({ success: true, message: "Edited post" }, 200);
  } catch (error) {
    console.log(error);
    await next();
  }
};

const addPost = async (c: Context, next: Next) => {
  const body = await c.req.json();
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

  const parseEditPostsSchema = createPostSchema.safeParse(body);
  if (!parseEditPostsSchema.success) {
    return c.json({
      success: false,
      messsage: parseEditPostsSchema.error,
    });
  }

  try {
    await prisma.posts.create({
      data: {
        title: parseEditPostsSchema.data.title,
        content: parseEditPostsSchema.data.content,
        slug: parseEditPostsSchema.data.slug,
        published: parseEditPostsSchema.data.published,
        thumbnail: parseEditPostsSchema.data.thumbnail,
        userId,
      },
    });

    return c.json({ success: true, message: "added post" }, 200);
  } catch (error) {
    console.log(error);
    await next();
  }
};

export { getAllPosts, deletePost, editPost, addPost };
