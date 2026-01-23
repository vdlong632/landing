import { Product } from "../../../types/product";
import { useCart } from "../../context/CartContext";

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart } = useCart();

  // Lấy ảnh đầu tiên trong mảng images
  const displayImage =
    Array.isArray(item.images) && item.images.length > 0
      ? item.images[0]
      : "/placeholder.jpg";

  return (
    <div className="cart-item">
      <img src={displayImage} alt={item.name} />

      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <div className="item-meta">
          <span className="item-quantity">{item.quantity} x</span>
          <span className="item-price">Rs. {item.price.toLocaleString()}</span>
        </div>
      </div>

      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
        X
      </button>
    </div>
  );
};

export default CartItem;
