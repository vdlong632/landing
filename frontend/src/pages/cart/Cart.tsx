import PageHeader from "../../component/pageheader/PageHeader";
import { Product } from "../../types/product";
import { useCart } from "../../component/context/CartContext";
import CartSummary from "../../component/modal/component/CartSummary";
import CartItem from "../../component/modal/component/CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems } = useCart();
  return (
    <div className="cart">
      <PageHeader
        title="Cart"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Cart", path: "/cart" },
        ]}
      />
      <div className="cart-container">
        <div className="cart-list-info">
          <ul>
            <li className="product-name">Product</li>
            <li className="product-price">Price</li>
            <li className="product-quantity">Quantity</li>
            <li className="product-subtotal">Subtotal</li>
          </ul>
          <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} showSubtotal={true} mode="page"/>
        ))}
      </div>
        </div>
        <div className="cart-total">
          <h3>Cart Totals</h3>
          <CartSummary />
          <Link to="/checkout"><button>Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;
