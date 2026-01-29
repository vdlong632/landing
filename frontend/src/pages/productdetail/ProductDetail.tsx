import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types/product";
import { useCart } from "../../component/context/CartContext";
import RelatedProduct from "./component/RelatedProduct";

const ProductDetail = () => {
  const [selectedImg, setSelectedImg] = useState<string>("");
  const [product, setProduct] = useState<Product | null>(null);
  const { slug } = useParams<{ slug: string }>();
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `http://localhost:3001/api/products/slug/${slug}`,
      );
      const data = await response.json();
      const foundData = Array.isArray(data) ? data[0] : data;
      setProduct(foundData);
      if (foundData.images.length > 0) {
        setSelectedImg(foundData.images[0]);
      }
    };
    fetchProduct();
  }, [slug]);

  if (!product) {
    return <p>Đang tải dữ liệu...</p>;
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, count);
    }
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-page">
        <div className="images-section">
          <div className="thumbnail-list">
            {product &&
              Array.isArray(product.images) &&
              product.images.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt=""
                  onClick={() => setSelectedImg(imgUrl)}
                />
              ))}
          </div>
          <div className="main-image">
            <img src={selectedImg} alt="" />
          </div>
        </div>
        <div className="product-info">
          <p style={{fontSize: "35px", margin: "0.5em 0"}}>{product.name}</p>
          <p style={{margin: "0", color: "rgba(159, 159, 159, 1)", fontSize: "20px"}}>Rs. {product.price.toLocaleString()}</p>
          <p style={{maxWidth: "65%"}}>{product.description}</p>
          <div className="size-selector">
            <p>Size</p>
            {Array.isArray(product.sizes) &&
              product.sizes.map((s) => <button key={s.code}>{s.code}</button>)}
          </div>
          <div className="color-selector">
            <p>Color</p>
            <div style={{ display: "flex", gap: "10px" }}>
              {Array.isArray(product.colors) &&
                product.colors.map((c) => (
                  <div
                    key={c.code}
                    style={{
                      backgroundColor: c.code,
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      border: "1px solid #ccc",
                    }}
                    title={c.name}
                  />
                ))}
            </div>
          </div>
          <div className="count-selector">
            <div>
              <button onClick={() => setCount((prev) => Math.max(prev - 1, 1))}>
                -
              </button>
              <span>{count}</span>
              <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add To Cart</button>
            <button>+ Compare</button>
          </div>
          <div className="detail-info">
            <li><span>SKU: {product.sku}</span></li>
            <li><span>Category: {product.category}</span></li>
            <li><span>Tags: {product.tags}</span></li>
            <li><span>Share</span></li>
          </div>
        </div>
      </div>
      <RelatedProduct
        currentId={product.id}
        currentCategory={product.category}
      />
    </div>
  );
};
export default ProductDetail;
