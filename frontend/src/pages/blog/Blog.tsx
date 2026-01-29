import PageHeader from "../../component/pageheader/PageHeader";
import BlogList from "./component/BlogList";
import RecentPost from "./component/RecentPost";

const Blog = () => {
  return (
    <>
      <PageHeader
        title="Blog"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
        ]}
      />
      <div className="blog-container">
        <BlogList limit={3} />
        <RecentPost/>
      </div>
    </>
  );
};
export default Blog;
