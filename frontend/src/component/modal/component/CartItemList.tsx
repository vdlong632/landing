import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

const CartItemList = () => {
  const { cartItems } = useCart();

  return (
    <div className="shopping-cart-modal">
      <div className="cart-items-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} showSubtotal={false} mode="modal"/>
          ))
        ) : (
          // <p className="empty-cart">Giỏ hàng đang trống</p>
          <p></p>
        )}
      </div>
    </div>
  );
};

export default CartItemList;
