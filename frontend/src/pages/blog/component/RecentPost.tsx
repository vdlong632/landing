import { useEffect, useState } from "react";
import { Blog } from "../../../types/blog";
import { useNavigate } from "react-router-dom";

const RecentPost = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/api/blogs");
      const data = await res.json();
      setBlogs(data);
    };
    fetchData();
  }, []);

  const handleGoToDetail = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="recent-post">
      <h3>Recent Posts</h3>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="post-item"
          onClick={() => handleGoToDetail(blog.slug)}
          style={{ cursor: "pointer" }}
        >
          {blog.image && <img src={blog.image} alt={blog.title} />}

          <div className="title">
            <p>{blog.title}</p>
            <span>{blog.published_at}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPost;
