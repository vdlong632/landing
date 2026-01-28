import PageHeader from "../../component/pageheader/PageHeader";
import BillingForm from "./component/BillingForm";
import PlaceOrder from "./component/PlaceOrder";

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
      <div className="checkout-container">
        <BillingForm/>
        <PlaceOrder/>
      </div>
    </div>
  );
};
export default Checkout;
