import { Link } from "react-router-dom"
import { Post } from "./Blogs"


function Blog({ blog }: { blog: Post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
    <img
      alt="Blog Post Image"
      className="w-48 h-48 object-cover"
      height={225}
      src="/placeholder.svg"
      style={{
        aspectRatio: "300/225",
        objectFit: "cover",
      }}
      width={300}
    />
    <div className="p-6 flex-1">
      <h2 className="text-xl font-bold mb-2">
        <Link to="/blog">Mastering React: A Comprehensive Guide</Link>
      </h2>
      <p className="text-gray-600 mb-4">
        Discover the power of React and learn how to build dynamic and
        responsive web applications.
      </p>
      <div className="flex items-center text-gray-500 text-sm">
        <span>John Doe</span>
        <span className="mx-2">•</span>
        <span>May 1, 2023</span>
      </div>
    </div>
  </div>
  )
}

export default Blog