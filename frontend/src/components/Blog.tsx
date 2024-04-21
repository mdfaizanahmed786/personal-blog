import { Link } from "react-router-dom";
import { Post } from "./Blogs";

function Blog({ blog }: { blog: Post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
      <img
        alt="Blog Post Image"
        className="w-48 h-48 object-cover"
        height={225}
        src={blog.thumbnail}
        style={{
          aspectRatio: "300/225",
          objectFit: "cover",
        }}
        width={300}
      />
      <div className="p-6 flex-1">
        <h2 className="text-xl font-bold mb-2">
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h2>
        <p className="text-gray-600 mb-4">{blog.content.slice(0, 100)}..</p>
        <div className="flex items-center text-gray-500 text-sm">
          <span>{blog.user.fullname}</span>
          <span className="mx-2">•</span>
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
