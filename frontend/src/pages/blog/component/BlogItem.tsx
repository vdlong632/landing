import { useNavigate } from "react-router-dom";
import { Blog } from "../../../types/blog";
interface Props {
  blog: Blog;
}
const BlogItem = ({ blog }: Props) => {
  const navigate = useNavigate();
  const handleGoToDetail = () => {
    navigate(`/blog/${blog.slug}`);
  };
  return (
    <div className="blog-item">
      <img src={blog.image} />
      <div className="blog-info">
        <span>
          {" "}
          <img src="author_blog.svg" alt="" />
          {blog.author}
        </span>
        <span> <img src="blog-date.svg" alt="" />
            {blog.published_at}</span>
        <span> <img src="blog-tag.svg" alt="" />
            {blog.category}</span>
      </div>
      <p className="blog-title">{blog.title}</p>
      <p className="blog-content">{blog.content}</p>
      <button onClick={handleGoToDetail}>Read more</button>
    </div>
  );
};
export default BlogItem;
