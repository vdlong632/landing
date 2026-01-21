import { useState } from "react";
import Search from "./child/Search";
import User from "./child/User";
import WishList from "./child/WishList";
import CartModal from "../../../modal/CartModal";
import CartIcon from "./child/CartIcon";

const HeaderActions = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  const handleCartClick = () => {
    setShowCart(prev => !prev);
  };

  return (
    <div className="action">
      <User />
      <Search />
      <WishList />
      <CartIcon onClick={handleCartClick} />

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </div>
  );
};

export default HeaderActions;
