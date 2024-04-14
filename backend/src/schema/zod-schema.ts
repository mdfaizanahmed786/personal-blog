import { z } from "zod";

const signUpUserSchema=z.object({
    name: z.string().min(3, {message:"Please enter a name more that three characters"}).trim(),
    username: z.string().min(3, {message:"Enter username more than 3 characters"}).trim().toLowerCase(),
    age:z.string().optional(),
    password:z.string(),
    fullname:z.string().trim()

})

const loginUserSchema=z.object({
    username:z.string().trim().toLowerCase(),
    password:z.string().min(3).max(20)

})

const createPostSchema=z.object({
    title: z.string().trim().min(3, {message:"Provide more than 3 characters"}),
    slug: z.string().trim().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    content:z.string().trim().min(3),
    published: z.boolean().optional(),
    thumbnail: z.string()
})

const editPostSchema=z.object({
    title: z.string().min(3, {message:"Provide more than 3 characters"}).optional(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional(),
    content:z.string().min(3).optional(),
    thumbnail: z.string().optional(),
    postId: z.string().uuid(),
    published: z.boolean().optional()

})

export {createPostSchema, signUpUserSchema, loginUserSchema, editPostSchema}