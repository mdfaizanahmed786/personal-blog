import { z } from "zod";

const signUpUserSchema=z.object({
    name: z.string().min(3, {message:"Please enter a name more that three characters"}),
    username: z.string().min(3, {message:"Enter username more than 3 characters"}),
    age:z.string().optional(),
    password:z.string()

})

const loginUserSchema=z.object({
    username:z.string(),
    password:z.string()

})

const createPostSchema=z.object({
    title: z.string().min(3, {message:"Provide more than 3 characters"}),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    content:z.string().min(3),
    userId: z.string()
})

export {createPostSchema, signUpUserSchema, loginUserSchema}