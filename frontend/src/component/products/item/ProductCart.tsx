import { Product } from "../../../types/product";
import { useCart } from "../../context/CartContext"; // Đảm bảo đường dẫn đúng

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  // Lấy hàm addToCart từ Context (đổi tên để tránh nhầm lẫn nếu cần)
  const { addToCart } = useCart();

  const displayImage = (product?.image && product.image.length > 0) 
    ? product.image[0] 
    : "/placeholder.jpg";

  return (
    <div className="product-item">
      <div className="product-image-container">
        <img
          src={displayImage}
          alt={product?.name || "Product"}
        />

        {/* Overlay đè lên toàn bộ ảnh và badge khi hover (theo SCSS cũ của bạn) */}
        <div className="product-overlay">
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)} // Sử dụng hàm từ Context
          >
            Add to cart
          </button>

          <div className="product-actions">
            <div className="action-item"><span>Share</span></div>
            <div className="action-item"><span>Compare</span></div>
            <div className="action-item"><span>Like</span></div>
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
        <p className="subtitle">{product.category}</p>
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