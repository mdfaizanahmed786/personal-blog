import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postRouteInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { Post } from "./Blogs";

function SingleBlog() {
  const { slug } = useParams();
  const [singleBlog, setSingleBlog] = useState<Post | null>(null);
  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      const { data } = await postRouteInstance.get(`/single?slug=${slug}`);
      if (!data.success) {
        toast.error(data.message);
      }
      setSingleBlog(data.post);
    };

    fetchBlog();
  }, [slug]);
  return (
    <>
      {singleBlog && (
        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
          <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
            <div className="space-y-2 not-prose">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                {singleBlog.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Published on {new Date(singleBlog.createdAt).toDateString()} by{" "}
                {singleBlog.user.fullname}
              </p>
            </div>
            <figure className="lg:-mx-12 xl:-mx-20">
              <img
                alt="Featured Image"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height="340"
                src={singleBlog.thumbnail}
                width="1250"
              />
              <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400">
                Minimalist web design
              </figcaption>
            </figure>
            <p>{singleBlog.content}</p>
            <p>{singleBlog.content}</p>
            <p>{singleBlog.content}</p>
            <p>{singleBlog.content}</p>
          </article>
        </div>
      )}
    </>
  );
}

export default SingleBlog;
