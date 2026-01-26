import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types/product";
import { useCart } from "../../component/context/CartContext";

const ProductDetailTest = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  const [selectedImg, setSelectedImg] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3001/api/products/slug/${slug}`,
        );
        const data = await response.json();
        const foundProduct = Array.isArray(data) ? data[0] : data;
        setProduct(foundProduct);

        if (foundProduct?.images?.length > 0) {
          setSelectedImg(foundProduct.images[0]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, count);
    }
  };

  if (loading)
    return <div className="p-20 text-center">Đang tải thông tin...</div>;
  if (!product)
    return <div className="p-20 text-center">Sản phẩm không tồn tại!</div>;

  return (
    <div className="product-detail-page">
      <div className="images-section">
        <div
          className="thumbnail-list"
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          {Array.isArray(product.images) &&
            product.images.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`${product.name} ${index}`}
                onClick={() => setSelectedImg(imgUrl)}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "8px",
                  border: selectedImg === imgUrl ? "2px solid #B88E2F" : "none",
                }}
              />
            ))}
        </div>

        <div className="main-image">
          <img
            src={selectedImg}
            alt={product.name}
            style={{
              width: "450px",
              height: "500px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>

      {/* PHẦN THÔNG TIN */}
      <div className="product-info" style={{ flex: 1 }}>
        <h1 style={{ fontSize: "35px", marginBottom: "10px" }}>
          {product.name}
        </h1>
        <p style={{ fontSize: "24px", color: "#9F9F9F", fontWeight: "500" }}>
          Rs. {product.price.toLocaleString()}
        </p>

        <p style={{ margin: "20px 0", lineHeight: "1.6" }}>
          {product.description}
        </p>

        {/* Size Selection */}
        <div className="size-selector" style={{ marginBottom: "20px" }}>
          <p style={{ color: "#9F9F9F", marginBottom: "10px" }}>Size</p>
          <div style={{ display: "flex", gap: "10px" }}>
            {Array.isArray(product.sizes) &&
              product.sizes.map((s) => (
                <button
                  key={s.code}
                  style={{
                    padding: "10px 15px",
                    borderRadius: "5px",
                    border: "1px solid #F9F1E7",
                    backgroundColor: "#F9F1E7",
                    cursor: "pointer",
                  }}
                >
                  {s.code}
                </button>
              ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="color-selector" style={{ marginBottom: "20px" }}>
          <p style={{ color: "#9F9F9F", marginBottom: "10px" }}>Color</p>
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

        {/* Quantity & Actions */}
        <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
          <div
            style={{
              border: "1px solid #9F9F9F",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <button
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                padding: "0 15px",
              }}
              onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <span style={{ fontWeight: "600" }}>{count}</span>
            <button
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                padding: "0 15px",
              }}
              onClick={() => setCount((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              padding: "15px 40px",
              borderRadius: "10px",
              border: "1px solid black",
              background: "none",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Add To Cart
          </button>

          <button
            style={{
              padding: "15px 40px",
              borderRadius: "10px",
              border: "1px solid black",
              background: "none",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            + Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTest;
