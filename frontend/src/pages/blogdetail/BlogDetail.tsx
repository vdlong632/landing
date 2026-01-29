import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3001/api/blogs/slug/${slug}`
      );
      const data = await res.json();
      setBlog(data);
    };

    fetchData();
  }, [slug]);

  if (!slug) {
    return <div>Invalid blog</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
