import { useState } from "react";
import CartSummary from "../../../component/modal/component/CartSummary";
import { useCart } from "../../../component/context/CartContext";

const PlaceOrder = () => {
  const { cartItems } = useCart();
  const [selected, setSelected] = useState("");
  return (
    <div className="place-order">
      <div className="heading">
        <h2>Product</h2>
        <h2>Subtotal</h2>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="cart-info" key={item.id}>
            <div>
              <span className="name-product">{item.name} </span> x{" "}
              <span>{item.quantity}</span>
            </div>
            <div>Rs. {item.price.toLocaleString()}</div>
          </div>
        ))
      ) : (
        // <p className="empty-cart">Giỏ hàng đang trống</p>
        <p></p>
      )}
      <CartSummary />
      <li>
        <label htmlFor="">
          <input
            type="radio"
            name="payment"
            value="bank1"
            checked={selected === "bank1"}
            onChange={(e) => setSelected(e.target.value)}
          />{" "}
          Direct Bank Transfer
        </label>
        {selected === "bank1" && (
          <p className="payment-detail">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        )}
      </li>
      <li>
        <label htmlFor="">
          <input
            type="radio"
            name="payment"
            value="bank2"
            checked={selected === "bank2"}
            onChange={(e) => setSelected(e.target.value)}
          />{" "}
          Direct Bank Transfer
        </label>
        {selected === "bank2" && (
          <p className="payment-detail">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        )}
      </li>
      <li>
        <label htmlFor="">
          <input
            type="radio"
            name="payment"
            value="delivery"
            checked={selected === "delivery"}
            onChange={(e) => setSelected(e.target.value)}
          />{" "}
          Cash On Delivery
        </label>
        {selected === "delivery" && (
          <p className="payment-detail">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        )}
      </li>
      <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <b>privacy policy.</b>
      </p>
      <div className="place-order-btn">
        <button>Place Order</button>
      </div>
    </div>
  );
};
export default PlaceOrder;
