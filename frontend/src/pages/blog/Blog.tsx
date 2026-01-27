import PageHeader from "../../component/pageheader/PageHeader";

const Blog = () => {
  return (
    <PageHeader
      title="Blog"
      breadcrumb={[
        { label: "Home", path: "/" },
        { label: "Blog", path: "/blog" },
      ]}
    />
  );
};
export default Blog;
