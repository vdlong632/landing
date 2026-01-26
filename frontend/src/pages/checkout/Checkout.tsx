import PageHeader from "../../component/pageheader/PageHeader";

const Checkout = () => {
  return (
    <div>
        <PageHeader
        title="Cart"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Checkout", path: "/checkout" },
        ]}
      />
    </div>
  );
};
export default Checkout;
