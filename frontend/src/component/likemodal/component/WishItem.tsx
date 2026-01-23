import { Product } from "../../../types/product";
import { useWishlist } from "../../../component/context/WishListContext";
import { useCart } from "../../../component/context/CartContext";
interface WishListItemProps {
  item: Product;
}
interface Props {
  product: Product;
}

const WishItem = ({ item }: WishListItemProps) => {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

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

      <button
        className="remove-btn"
        onClick={() => removeFromWishlist(item.id)}
      >
        X
      </button>
      <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
        +
      </button>
    </div>
  );
};

export default WishItem;
