import PageHeader from "../../component/pageheader/PageHeader";

const Checkout = () => {
  return (
    <div>
        <PageHeader
        title="Checkout"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Checkout", path: "/checkout" },
        ]}
      />
      <div></div>
    </div>
  );
};
export default Checkout;
