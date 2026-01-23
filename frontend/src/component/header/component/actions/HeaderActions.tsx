import { useState } from "react";
import Search from "./child/Search";
import User from "./child/User";
import CartModal from "../../../modal/CartModal";
import CartIcon from "./child/CartIcon";
import WishListIcon from "./child/WishList";
import WishListModal from "../../../likemodal/WishListModal";

const HeaderActions = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showWishList, setShowWishList] = useState<boolean>(false);

  const handleCartClick = () => {
    setShowCart((prev) => !prev);
  };
  const handleWishListClick = () => {
    setShowWishList((prev) => !prev);
  };

  return (
    <div className="action">
      <User />
      <Search />
      <WishListIcon onClick={handleWishListClick} />
      {showWishList && <WishListModal onClose={() => setShowWishList(false)} />}
      <CartIcon onClick={handleCartClick} />

      {showCart && <CartModal open={showCart} onClose={() => setShowCart(false)} />}
    </div>
  );
};

export default HeaderActions;
