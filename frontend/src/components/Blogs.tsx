import { useEffect, useState } from "react"
import { postRouteInstance } from "../lib/axios"
import toast from "react-hot-toast"
import Blog from "./Blog"

export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    userId: string;
    published: boolean;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
    user: {
      name: string;
      age: string;
      username: string;
      fullname: string;
    };
  }

function Blogs() {
    const [blogs, setBlogs] = useState([])
useEffect(()=>{
   const fetchBlogs=async()=>{
    const {data}=await postRouteInstance.get("/")
    console.log(data)
    if(!data.success){
        toast.error(data.message)
    }
    setBlogs(data.posts)

   }
    fetchBlogs()
},[])
  return (
<>

{blogs.map((blog: Post) => (
  <Blog key={blog.id} blog={blog} />
))}

</>
    
  )
}

export default Blogs