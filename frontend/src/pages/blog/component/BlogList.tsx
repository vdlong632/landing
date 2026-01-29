import { useEffect, useState } from "react";
import { Blog } from "../../../types/blog";
import BlogItem from "./BlogItem";
interface BlogProps {
  limit?: number;
}
const BlogList = ({ limit }: BlogProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("http://localhost:3001/api/blogs");
      const data: Blog[] = await res.json();
      setBlogs(data);
    };
    fetchBlog();
  }, []);

  const displayedBlog = limit ? blogs.slice(0, limit) : blogs;
  console.log("blogs:", blogs, Array.isArray(blogs));
  return (
    <div className="blog-list">
      <div className="blog-grid">
        {displayedBlog.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};
export default BlogList;
