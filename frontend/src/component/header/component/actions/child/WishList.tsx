import React from "react";

interface WishListProps {
  onClick?: () => void;
}

const WishListIcon: React.FC<WishListProps> = ({ onClick }) => {
  return (
    <div className="wishlist" onClick={onClick}>
      <img src="heart.png" alt="WishList" />
    </div>
  );
};

export default WishListIcon;
