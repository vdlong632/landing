import { useCart } from "../../context/CartContext";

const CartSummary = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      <div className="summary-row">
        <span>Subtotal:</span>
        <span className="total-amount">Rs. {totalPrice.toLocaleString()}</span>
      </div>
    </div>
  );
};
export default CartSummary;