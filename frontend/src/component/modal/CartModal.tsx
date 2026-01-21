import React from "react";
import CartItemList from "./component/CartItemList";
import CartSummary from "./component/CartSummary";
import CartActions from "./component/CartActions";

interface ListCartProps {
  onClose: () => void;
}

const ListCart: React.FC<ListCartProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="heading-cart">
          <h5>Shopping Cart</h5>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>
        <CartItemList/>
        <CartSummary/>
        <CartActions/>
      </div>
    </div>
  );
};

export default ListCart;
