import React from "react";

interface CartProps {
  onClick?: () => void;
}

const Cart: React.FC<CartProps> = ({ onClick }) => {
  return (
    <div className="cart" onClick={onClick}>
      <img src="cart.png" alt="Cart" />
    </div>
  );
};

export default Cart;
