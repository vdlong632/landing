import PageHeader from "../../component/pageheader/PageHeader";

const Contact = () => {
  return (
    <PageHeader
        title="Cart"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />
  )
};
export default Contact
