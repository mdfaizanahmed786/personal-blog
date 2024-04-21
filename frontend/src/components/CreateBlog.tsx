import { CreatePost } from "@faizanpkg786/blog";
import React, { useState } from "react";
import { postRouteInstance } from "../lib/axios";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [loading,setLoading]=useState(false) 
    const navigate=useNavigate();
    const user=useSelector((state:RootState)=>state.auth)   
  const [formData, setFormData] = useState<CreatePost>({
    title: "",
    content: "",
    slug: "",
    thumbnail: "",
    published: false,
  });

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
try {

    setLoading(true);
    const {data}=await postRouteInstance.post("/add",formData, {
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    })
    if(!data.success){
        toast.error(data.message)
    }
    toast.success(data.message)
    setTimeout(()=>{
         navigate(`/blog/${data.post.slug}`)
    },1000)
    
} catch (error) {
    console.log(error)
    toast.error("An error occurred")
}
finally{
    setLoading(false)
}
  };

  return (
    <div className="py-8 max-w-4xl mx-auto ">

    <div className="mt-10">
      <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-medium mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows={6}
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="slug"
            className="block text-gray-700 font-medium mb-2"
          >
            Slug
          </label>
          <input
            type="text"
            id="slug"
            required
            name="slug"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-gray-700 font-medium mb-2"
          >
            Thumbnail
          </label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={formData.thumbnail}
            onChange={(e) =>
              setFormData({ ...formData, thumbnail: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="published" className="flex items-center">
            <input
              type="checkbox"
              id="published"
              required
              name="published"
              className="form-checkbox text-blue-500"
              checked={formData.published}
              onChange={(e) =>
                setFormData({ ...formData, published: e.target.checked })
              }
            />
            <span className="ml-2 text-gray-700">Published</span>
          </label>
        </div>
        <button
        disabled={loading}
          type="submit"
          className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
            {loading ? "Loading..." : "Create Post"}
        </button>
      </form>
    </div>

    </div>
  );
};

export default CreateBlog;
