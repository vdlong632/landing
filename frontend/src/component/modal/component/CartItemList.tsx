import { useCart } from "../../context/CartContext";

const CartItemList = () => {
  const { cartItems } = useCart();

  return (
    <div className="shopping-cart-modal">
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image?.[0]} alt={item.name} />
            <div className="item-info">
              <h4>{item.name}</h4>
              <p>
                {item.quantity} X <span>Rs. {item.price.toLocaleString()}</span>
              </p>
            </div>
            <button className="remove-btn">X</button>
          </div>
        ))}
      </div>
      {/* ... Footer Modal (Subtotal, Checkout btn) ... */}
    </div>
  );
};
export default CartItemList