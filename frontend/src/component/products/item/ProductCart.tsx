import { Product } from "../../../types/product";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishListContext"

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const displayImage =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : "/placeholder.jpg";

  const handleShare = () => {
    const productUrl = `${window.location.origin}/product/${product.slug}`;
    navigator.clipboard.writeText(productUrl);
  };

  const handleCompare = () => {
    console.log("So sánh sản phẩm:", product.name);
  };


  return (
    <div className="product-item">
      <div className="product-image-container">
        <img src={displayImage} alt={product?.name || "Product"} />

        {/* Overlay đè lên toàn bộ ảnh và badge khi hover*/}
        <div className="product-overlay">
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>

          <div className="product-actions">
            <button className="action-item" onClick={handleShare}>
              Share
            </button>
            <button className="action-item" onClick={handleCompare}>
              Compare
            </button>
            <button className="action-item" onClick={() => addToWishlist(product)}>
              Like
            </button>
          </div>
        </div>

        <div className="product-badges">
          {product.discount && product.discount > 0 ? (
            <span className="badge discount">-{product.discount}%</span>
          ) : product.isNew ? (
            <span className="badge new">New</span>
          ) : null}
        </div>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="subtitle">{product.material}</p>
        <div className="price-box">
          <span className="current-price">
            Rp {product.price.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="old-price">
              Rp {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
