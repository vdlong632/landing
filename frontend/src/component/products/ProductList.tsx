import { useEffect, useState } from "react";
import ProductCard from "./item/ProductCart";
import { Product } from "../../types/product";
import { Link } from "react-router-dom";

interface ProductListProps {
  limit?: number;
  // showTitle?: boolean;
  showMore?: boolean;
}

const ProductList = ({ limit, showMore = true }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        setError("Cannot load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // const handleAddToCart = (product: Product) => {
  //   console.log("Add to cart:", product);
  // };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  //Nếu có limit thì cắt mảng, không thì hiện hết
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="products-section">
      <h2>Our Products</h2>

      <div className="products-grid">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* nút Show More chỉ hiển thị ở trang Home*/}
      {showMore && (
        <div className="show-more-container">
          <Link to="/shop" className="show-more-btn">
            <button>Show More</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductList;
