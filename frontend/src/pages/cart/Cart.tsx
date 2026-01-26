import PageHeader from "../../component/pageheader/PageHeader";

const Cart = () => {
  return (
    <div className="cart">
      <PageHeader
        title="Cart"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Cart", path: "/cart" },
        ]}
      />
    </div>
  );
};
export default Cart;
